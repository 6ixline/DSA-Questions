function solve(A){
    let n = A.length;
    let lhmax = A[0];
    let rhmax = A[n - 1];
    let lh = [];
    let rh = [];
    lh[0] = 0;
    rh[n - 1] = 0;
    let idx = n - 2;
    for(let i = 1; i < n; i++){
        lh[i] = lhmax;
        lhmax = Math.max(A[i], lhmax);

        rh[idx] = rhmax;
        rhmax = Math.max(A[idx], rhmax);
        idx--;
    }

    let water = 0;
    for(i = 0; i < n; i++){
        let val = Math.min(lh[i], rh[i]) - A[i];

        if(val > 0){
            water += val;
        }
    }



    return water;
}

console.log(solve([1, 4, 2, 4, 5, 2, 4]))