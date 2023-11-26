function betterString(s1, s2){

    if(cds(s1) >= cds(s2)){
        return s1;
    }else{
        return s2;
    }


}

function cds(s){
    let len = s.length;
    let mod = 10**9 + 7;
    let dp = Array(len + 1).fill(0);
    dp[0] = 1;
    let lastInd = new Map();


    for(let i = 1; i <= len; i++){
        dp[i] = (2 * dp[i - 1]) % mod;

        if(lastInd.has(s[i - 1])){
            dp[i] -= dp[lastInd.get(s[i - 1]) - 1];
        }
        lastInd.set(s[i - 1], i);
    }

    return dp[len];
}

console.log(betterString("gfg", "ggg"));