function solve(A){
    let n  = A.length; 
    let lmax = [];
    let rmax = Array(n);
    lmax[0] = A[0];
    rmax[n - 1] = A[n - 1];

    for(let i = 1; i < A.length; i++){
        lmax.push(Math.max(A[i], lmax[i - 1]));
    }

    for(let j = n - 2; j >= 0; j--){
        rmax[j] = Math.max(A[j], rmax[j + 1]);
    }

    let ans = 0;
    for(let i = 1; i < n - 1; i++){
        let water = Math.min(lmax[i - 1], rmax[i + 1]) - A[i];
        if(water > 0){
            ans += water;
        } 
    }

    return ans;
}



console.log(solve([6,9,9]))