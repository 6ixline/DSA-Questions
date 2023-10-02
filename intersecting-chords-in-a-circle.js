function solve(A){

    // let dp = new Array(A + 1);
    // dp[0] = 1;
    // dp[1] = 1;

    // for(let i = 2; i <= A; i++){
    //     dp[i] = 0;

    //     for(let j = 0; j < i; j++){
    //         dp[i] += dp[j] * dp[i - j - 1];
    //     }
    // }

    // return dp[A]


    let dp = Array(A + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    let mod = BigInt(1e9 + 7);

    for(let i = 2; i <= A; i++){
        let val = 0n;
        for(let j = 0; j < i; j++){
            val = (val % mod + (BigInt(dp[j]) * BigInt(dp[i - 1- j])) % mod) % mod;
        }
        dp[i] = parseInt(val);
    }

    return dp[A];

}


console.log(solve(36));