function solve(A){
    A = A.sort((a, b) => a - b);
    let n = A.length;
    let cnt = 0;
    let start = A[0];
    let cur = 1;
    for(let i = 1; i < n; i++){

        if(A[i] == start + 1){
            cur++;
            start++;
        }else if(A[i] == start){
            continue;
        }else{
            cnt = Math.max(cnt, cur);
            cur = 0;
            start = A[i];
        }
    }

    cnt = Math.max(cnt, cur);
    
    return cnt;
}

console.log(solve([1, 1, 2 ,2 ,3 ,3, 4 ,4 ,5, 5]));