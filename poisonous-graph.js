function solve(A, B){
    let mod = 998244353;
    let adj = Array(A + 1).fill().map(()=> []);

    for(let i = 0; i < B.length; i++){
        let u = B[i][0];
        let v = B[i][1];
        if(u && v){
            adj[u].push(v);
            adj[v].push(u);
        }
    }

    let color = Array(A + 1).fill(-1);
    let color_a = 0;
    function dfs(src, c) {
        color[src] = c;
        for (let i = 0; i < adj[src].length; i++) {
            if(c == 0){
                color_a++;
            }
            if (color[adj[src][i]] == -1) {
                if (dfs(adj[src][i], 1 - c) == 0) {
                    return 0;
                }
            } else if (color[adj[src][i]] == c) {
                return 0;
            }
        }
        return 1;
    }
    for (let i = 0; i <= A; i++) {
        if (color[i] == -1) {
            if (dfs(i, 0) == 0) {
                return 0;
            }
        }
    }


    return (power(2, color_a) + power(2, A - color_a));
    
}

function power(x , y)
{
    var temp;
    let mod = 998244353;
    if( y == 0)
        return 1;
    temp = power(x, Math.floor(y / 2));
    if (y % 2 == 0)
        return (temp*temp) % mod;
    else
        return (x*temp*temp) % mod;
}
 


console.log(solve(100000, [[]]));