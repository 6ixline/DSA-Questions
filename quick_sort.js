function rearrange(A, s, e){
    let p1 = s + 1, p2 = e;

    while(p1 <= p2){
        if(A[p1] <= A[s]){
            p1++;
        }else if(A[p2] > A[s]){
            p2--;
        }else{
            A[p1] = A[p1] + A[p2];
            A[p2] = A[p1] - A[p2];
            A[p1] = A[p1] - A[p2];
            p1++;
            p2--;
        }
    }
    
    if(s != p2){
        A[s] = A[s] + A[p2];
        A[p2] = A[s] - A[p2];
        A[s] = A[s] - A[p2];
    }
    return p2;

}
let A = [8, 6, 3, 11, 14];

function quickSort(A, s, e){
    if(s >= e) return;

    let idx = rearrange(A, s, e);
    quickSort(A, s, idx - 1);
    quickSort(A, idx + 1, e);
}

quickSort(A, 0, A.length - 1);

console.log(A);