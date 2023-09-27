function solve(A, B, C, D, E, F, G, H){

    let adj = Array(A + 1).fill().map(()=> Array(A + 1).fill(Number.MAX_SAFE_INTEGER));

   

    for(let i = 0; i < D.length; i++){
        adj[D[i]][E[i]] = Math.min(adj[D[i]][E[i]],F[i]);
        adj[E[i]][D[i]] = Math.min(adj[E[i]][D[i]],F[i]);
    }

    for(let i = 0; i <= A; i++){
        adj[i][i] = 0;
    }


    for(let x = 1; x <= A; x++){
        for(let src = 1; src <= A; src++){
            for(let dist = 1; dist <= A; dist++){
                if(src == 14 && dist == 8){
                    console.log(adj[src][x] + adj[x][dist], adj[src][dist]);
                }
                if(adj[src][x] + adj[x][dist] < adj[src][dist]){
                    adj[src][dist] = adj[src][x] + adj[x][dist];
                }
            }
        }
    }
    let ans = [];

    for(let i = 0; i < C; i++){
        let u = G[i];
        let v = H[i];
        if(adj[u][v] != Number.MAX_SAFE_INTEGER){
            ans[i] = adj[u][v];
        }else{
            ans[i] = -1;
        }
    }

    return ans;

}


console.log(solve(15, 18, 29, [11,2,2,6,2,8,9,3,14,15,4,14,8,7,8,6,2,12], [2,1,1,2,1,1,7,3,2,13,2,1,6,1,7,1,2,10], [8337,6651,29,7765,3428,5213,6431,2864,3137,4024,8169,5013,7375,3786,4326,6415,8982,6864], [6,2,1,15,12,2,14,10,13,15,15,4,8,7,9,4,15,13,12,5,2,10,1,11,14,7,3,13,12], [5,2,15,13,6,2,8,6,3,13,15,3,1,1,4,4,5,8,1,3,1,10,15,9,2,1,1,10,2]));