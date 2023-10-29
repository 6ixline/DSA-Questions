/*

Given an array of N integers arr[] where each element represents the maximum length of the jump that can be made forward from that element. This means if arr[i] = x, then we can jump any distance y such that y ≤ x.
Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

Note: Return -1 if you can't reach the end of the array.

*/


function minJumps(A,n){
    //code here
    if(n <= 1)
        return 0;

    if(A[0] == 0)
        return -1;

    let maxReach = A[0];
    let step = A[0];
    let jump = 1;

    let i = 1;

    for(i = 1; i < n; i++){
        if(i == n -1)
            return jump;

        console.log(maxReach, step, i + A[i], i);
        maxReach = Math.max(maxReach, i + A[i]);


        step--;

        if(step == 0){
            jump++;

            if(i >= maxReach)
                return -1;

            step = maxReach - i;

        }

    }
}


console.log(minJumps([9, 10, 1, 2, 3, 4, 8, 0, 0, 0, 0, 0, 0, 0, 1], 15))