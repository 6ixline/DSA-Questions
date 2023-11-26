function shortestCommonSupersequence(X, Y, m, n)
{
    // code here
    let dp = Array(m + 1).fill().map(()=> Array(n + 1).fill(0));
    for(let i=0;i<=m;i++){
        for(let j=0;j<=n;j++){
            if(i==0){
                dp[i][j]=j;
            }
            if(j==0){
                dp[i][j]=i;
            }
        }
    }

    for(let i=1; i<=m; i++){
        for(let j=1; j<=n; j++){
            if(X[i-1] == Y[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1;
            }
        }
        
    }

    return dp[m][n];
}

console.log(shortestCommonSupersequence("abcd", "xycd", 4, 4));
