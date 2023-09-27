function solve(A, B){

    let N = A.length;
    let M = B.length;
    let edges = [];

    for(let cost of A){
        edges.push([cost, 0]);
    }

    for(let cost of B){
        edges.push([cost, 1]);
    }

    edges.sort((a,b) => (a[0] - b[0]));

    N  = N + 1;
    M = M + 1;
    let cost = 0;

    for(let [c, d] of edges){
        if(d == 0){
            cost += (c * M);
            N--;
        }else{
            cost += (c * N);
            M--;
        }
    }


    return cost;

}


console.log(solve([1, 1, 1], [1, 1, 2]))