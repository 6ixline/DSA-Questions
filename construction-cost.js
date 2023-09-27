function solve(A, B){

    let mod = 1e9 + 7;
    let ds = Array(A + 1).fill().map((_, i) => i);

    let edges = B.sort((a, b) => a[2] - b[2]);

    let ans  = 0;

    edges.forEach(val => {
        let u = val[0];
        let v = val[1];
        let w = val[2];

        let up = parent(ds, u);        
        let vp = parent(ds, v);        
        if(up != vp){
            ans = (ans +  w) % mod;
            ds[vp] = up;
        }
    });


    return ans;
}


function parent(arr, i){
    if(arr[i] == i){
        return i;
    }else{
        return parent(arr, arr[i]);
    }
}

console.log(solve(5, [[1,2,16],[1,3,11],[2,4,10],[2,5,3],[5,4,4],[1,5,12],[3,4,3],[4,1,15]]))