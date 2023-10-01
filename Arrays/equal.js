/*
Question : Given an array A of N integers. The task is to find if there are two pairs (a, b) and (c, d) such that a+b = c+d.
Example 1:
Input:N=7 A[] = {3, 4, 7, 1, 2, 9, 8} Output: 1Explanation:(3, 7) and (9, 1) are the pairs whosesum are equal.  

Brute Force:

function solve(A){
    for(let i = 0; i < A.length; i++){
        for(let j = i + 1; j < A.length; j++){
            
            for(let k = j + 1; k < A.length; k++){
                for(let l = k + 1; l < A.length; l++){
                    if(A[i] + A[j] == A[k] + A[l]){
                        return [A[i], A[j], A[k], A[l]];
                    }
                }
            }
        }
    }
}

console.log(solve([3, 4, 7, 1, 2, 9, 8]));

*/


function solve(A){
    let hm = new Map();

    for(let i = 0; i < A.length; i++){
        for(let j = i + 1; j < A.length; j++){
            if(hm.has(`${A[i] + A[j]}`)){
                return 1;
            }else{
                hm.set(`${A[i] + A[j]}`, [A[i], A[j]]);
            }
        }
    }

    return 0
}

console.log(solve([3, 4, 7, 1, 2, 9, 8]));