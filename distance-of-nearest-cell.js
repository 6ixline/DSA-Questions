function solve(A){
    let dist = Array(A.length).fill().map(()=> Array(A[0].length).fill(Number.MAX_SAFE_INTEGER));

    let q = [];
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            if(A[i][j] == 1){
                dist[i][j] = 0;
                q.push([i, j]);
            }
        }
    }

    let curLen = 0;

    while(q.length > curLen){
        let val = q[curLen];
        curLen++;
        let i = val[0];
        let j = val[1];
        A[i][j] = 2;

        if(i - 1 >= 0 && A[i - 1][j] != 1){
            dist[i - 1][j] = Math.min(dist[i][j] + 1, dist[i - 1][j]);

            if(A[i - 1][j] != 2 && A[i - 1][j] != 1){
                q.push([i-1, j]);
            }
           
        }

        if(i + 1 < A.length && A[i + 1][j] != 1){
            dist[i + 1][j] = Math.min(dist[i][j] + 1, dist[i + 1][j]);

            if(A[i + 1][j] != 2 && A[i + 1][j] != 1){
                q.push([i + 1, j]);
            }
        }

        if(j - 1 >= 0 && A[i][j - 1] != 1){
            dist[i][j - 1] = Math.min(dist[i][j] + 1, dist[i][j - 1]);

            if(A[i][j - 1] != 2 && A[i][j - 1] != 1){
                q.push([i, j - 1]);
            }
           
        }
        if(j + 1 < A[0].length && A[i][j + 1] != 1){
            dist[i][j + 1] = Math.min(dist[i][j] + 1, dist[i][j + 1]);

            if(A[i][j + 1] != 2 && A[i][j + 1] != 1){
                q.push([i, j + 1]);
            }
        }
    }

    return dist;
}

console.log(solve([[1, 0, 0], [0, 0, 0], [0, 0, 0]]));