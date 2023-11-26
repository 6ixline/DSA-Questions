function solve(A){
    let n = A.length;

    let arr = new Array(26).fill().map(()=> []);

    for(let i = 0; i < n; i++){
        let idx = A.charCodeAt(i) - 97;

        arr[idx][0] = A[i];
        if(arr[idx][1] == undefined){
            arr[idx][1] = 1;
        }else{
            arr[idx][1] = arr[idx][1] + 1;
        }
    }

    let v = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] != undefined){
            v.push(arr[i]);
        }
    }

    v = v.sort((a, b)=>(b[1] - a[1]));

    let ans = "";
    console.log(v);
    for(let i = 0; i < v.length; i++){
            for(let j = 0; j < arr[i][1]; j++){
                ans += arr[i][0];
            }
    }

    return ans;
}

console.log(solve("ihhyicuj"));