// function printNumberPattern(s){
//     let stack = [];
//     let result = [];
//     let num = 1;
//     for(let i = 0; i < s.length; i++){
//         stack.push(num);
//         num++;
        
//         if(s.charAt(i) == "I"){
//             result.push(...stack.reverse());
//             stack = [];
//         }
//     }
//     stack.push(num);
//     result.push(...stack.reverse());

//     return result.join("");
// }


// console.log(printNumberPattern("IIDDDI"));


function leaders(arr, n){
    let ans = [];
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = n-1; i >= 0; i--){
        if(arr[i] > max){
            ans.push(arr[i]);
            max = Math.max(max, arr[i]);
        }
    }
    
    return ans.reverse();
}


console.log(leaders([18, 17, 4, 3, 5, 2], 6))