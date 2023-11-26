function solve(A)
{
    let n = A.length;
        
    if(n == 1){
        return A[0];
    }
    
    if(A[0] > A[1])
    {
        return A[0];
    }
    
    if(A[n - 1] > A[n - 2]){
        return A[n - 1];
    }
    
    let l = 1;
    let h = n - 2;
    
    while(l <= h){
        let mid = Math.floor((l + h) / 2);
        if(A[mid] > A[mid - 1] && A[mid] > A[mid + 1]){
            return A[mid];
        }else if(A[mid - 1] > A[mid]){
            h = mid - 1;
        }else{
            l = mid + 1;
        }
    }

    return -1;
}


console.log(solve([5, 17, 100, 11]));