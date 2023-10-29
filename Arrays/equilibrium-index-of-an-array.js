function findEquilibrium(A,n){
    //code here
    
    let pfsum = Array(n);
    let sfsum = Array(n);
    
    pfsum[0] = A[0];
    sfsum[n - 1] = A[n - 1];    
    
    for(let i = 1; i < n; i++){
        pfsum[i] = pfsum[i - 1] + A[i];
    }
    
    for(let j = n - 2; j >= 0; j--){
        sfsum[j] = sfsum[j + 1] + A[j];
    }
    
    
    for(let i = 0; i < n; i++){
        if(i == 0 && sfsum[i + 1] == 0){
            return i;
        }else if(i == n - 1 && pfsum[i - 1] == 0){
            return i;
        }else if(sfsum[i + 1] == pfsum[i - 1]){
            return i;
        }
    }
    
    return -1;
}