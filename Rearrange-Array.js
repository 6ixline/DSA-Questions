/*

# Find Max String With non repeating characters


function solve(A){
  let n = A.length;

  let res = 0;

  let lastIndex = new Array(256).fill(-1);

  let i = 0;


  for(let j = 0; j < n; j++){
    i = Math.max(i, lastIndex[A[j].charCodeAt()] + 1);

    res = Math.max(res, j - i + 1);

    lastIndex[A[j].charCodeAt()] = j;
  }

  return res;
}

console.log(solve("geeksforgeeks"))


# MIni Sorted Rotated Array

function solve(A, l, h){
  if(A[l] <= A[h]){
    return A[l];
  }


  while(l <= h){
    let mid = parseInt(l + (h - 1/ 2));

    if(A[mid] < A[mid - 1]){
      return A[mid];
    }

    if(A[mid] > A[h]){
      l = mid + 1;
    }else{
      h = mid - 1;
    }
  }


  return -1;
}


console.log(solve([5, 6, 1, 2, 3, 4], 0, 5))



# Maximum Interval





function solve(A){

  A.sort((a, b) => a[1] - b[1]);

  let ans = 1;
  let r1 = A[0][1];

  for(let i = 1; i < A.length; i++){
    let l1 = A[i][0];
    let r2 = A[i][1];

    if(l1 > r1){
      console.log([l1,r2])
      ans++;
      r1 = r2;
    }
  }

  return ans;
}

console.log(solve([ [ 1, 4 ],
  [ 2, 3 ],
  [ 4, 6 ],
  [ 8, 9 ] ]));




// Find Triplet with sum zero


function solve(A){

  A.sort((a, b)=> a - b);

  for(let i = 0; i < A.length; i++){
    let x = A[i];
    let l = i + 1;
    let r = A.length - 1;

    while(l < r){
      if(x + A[l] + A[r] == 0){
        return [x, A[l], A[r]];
      }else if(x + A[l] + A[r] > 0){
        r--
      }else{
        l++;
      }
    }
  }
  return [];
}


console.log(solve([0, -1, 2, -3, 1]));

*/

// function compare(val1, val2){
//   if(val1[0] > val2[0]){
//       return val1;
//   }else if(val1[0] < val2[0]){
//       return val2;
//   }else{
//       return val1[1] < val2[1] ? val1 : val2;
//   }
// }



// function solve(A){
//   let aSum = 0;

//   for(let i = 0; i < A.length; i++){
//       aSum += A[i];
//   }

//   aSum = parseInt(aSum/ 2);

  
//   let dp = new Array(A.length + 1).fill().map(()=>(Array(aSum + 1).fill().map(()=>( Array(2)))));

//   for(let i = 0; i <= A.length; i++)
//   {
//     dp[i][0] = [0, 0];
//   }

//   for(let i = 0; i < dp[0].length; i++){
//     dp[0][i] = [0, 0]
//   }

//   for(let i = 1 ; i <= A.length; i++){
//       for(let j = 1; j <= aSum; j++){
//           if(A[i - 1] > j){
//               dp[i][j] = dp[i - 1][j];
//           }else{
//               let val1  = [A[i - 1] + dp[i - 1][j - A[i - 1]][0], 1 + dp[i - 1][j - A[i - 1]][1]];
//               let val2 = [dp[i - 1][j][0], dp[i - 1][j][1]];

//               dp[i][j] = compare(val1, val2);
//           }
//       }
//   }


//   return dp[A.length][aSum][1];
// }




// console.log(solve([8,4,5,7,6,2]))


// function solve(A, B, C, D){
//   let adj = Array(A + 1).fill().map(()=>[]);

//   for(let i = 0; i < C.length; i++){
//       let u = C[i][0];
//       let v = C[i][1];
//       adj[u].push(v);
//       adj[v].push(u);
//   }


//   let visited = Array(A + 1).fill(false);
//   let queue = [];
//   let ans = 0;

//   for(let i = 1; i <= A; i++){
//       if(!visited[i]){
//           visited[i] = true;
//           for(let j =0; j < adj[i].length; j++){
//               queue.push(adj[i][j]);
//           }
//           let val = B[i - 1];
//           while(queue.length){
//               let c = queue.shift();
//               if(!visited[c]){
//                 val += B[c - 1];
//                 visited[c] = true;
//                 for(let j = 0; j < adj[c].length; j++){
//                   queue.push(adj[c][j]);
//                 }
//               }
//           }
//           if(val >= D){
//               ans++;
//           }

//       }


//   }

//   return ans;
// }



// console.log(solve(7, [1, 6, 7, 2, 9, 4, 5], [ [1, 2],  [2, 3], [5, 6],[5, 7] ], 12))


// function solve(A, B, C){
//     let adj = Array(A.length + 1).fill().map(()=>[]);

//     for(let i = 1; i < A.length; i++){
//         adj[A[i]].push(i + 1);
//     }

//     return adj;


//     let visited = Array(A.length + 1).fill(false);

//     function dfs(src){
//         visited[src] = true;
//         for(let i = 0; i < adj[src].length; i++){
//             let v = adj[src][i];
//             if(v == B){
//                 return true;
//             }
//             if(!(visited[v])){
//                 if(dfs(v)){
//                     return true;
//                 }
//             }
//         }

//         return false;
//     }
    

//     if(dfs(C)){
//         return 1;
//     }else{
//         return 0;
//     }
    
// }


// console.log(solve([1,1,1,1,1], 1, 1))



// Semester Course


// function solve(A, B){
//   let indices = Array(A + 1).fill(0);

//   let adj = Array(A + 1).fill().map(()=> []);


//   for(let i = 0; i < B.length; i++){
//     let u = B[i][0];
//     let v = B[i][1];

//     adj[u].push(v);
//     indices[v]++;
//   }

//   let q = [];
//   let ans = 1;
//   for(let i = 1; i < indices.length; i++){
//     if(indices[i] == 0){
//       q.push(i);
//     }
//   }

//   if(q.length == 0){
//     return -1;
//   }

//   let visited = Array(A + 1).fill(false);


//   while(q.length){
//     let val = q.shift();

//     if(visited[val]){
//       return -1;
//     }else{
//       visited[val] = true;
//       let check = false;
//       for(let i = 0; i < adj[val].length; i++){
//         indices[adj[val][i]]--;
//         if(indices[adj[val][i]] == 0){
//           check = true;
//           q.push(adj[val][i]);
//         }
//       }

//       if(check){
//         ans++;
//       }
//     }
//   }

//   return ans;

// }


// Semester course
// function solve(A, B){
//     let indices = Array(A + 1).fill(0);
//     let adj = Array(A + 1).fill().map(()=> []);
    
//     for(let i = 0; i < B.length; i++){
//         let u = B[i][0];
//         let v = B[i][1];
        
//         adj[u].push(v);
//         indices[v]++;
//     }
    
//     let q = [];
//     let ans = 0;
    
//     for(let i = 1; i < indices.length;i++){
//         if(indices[i] == 0){
//             q.push(i);
//         }
//     }
    
//     if(q.length == 0){
//         return -1;
//     }
//     let visited = Array(A + 1).fill(false);

//     while(q.length){
//         ans++;
//         let temp = [...q];
//         q = [];
//         for(let i =0; i < temp.length; i++)
//         {
//             let val = temp[i];
//             if(visited[val]){
//                 return -1;
//             }else{
//                 visited[val] =true;
//                 for(let j= 0; j < adj[val].length; j++){
//                     indices[adj[val][j]]--;
//                     if(indices[adj[val][j]] == 0){
//                         q.push(adj[val][j]);
//                     }
                    
//                 }         
//             }
//         }

//     }
    
//     for(let i = 1; i < visited.length; i++){
//         if(!visited[i]){
//             return -1;
//         }
//     }
    
//     return ans;
// }

// console.log(solve(8, [[7, 4], [6, 1], [6, 5], [3, 4], [2, 1], [5, 8], [2, 6]]));


// Minimum dist from 1
// function solve(A){
//     let dist = Array(A.length).fill().map(() => Array(A[0].length).fill(Number.MAX_SAFE_INTEGER));

// 	    let q = [];
	    
// 	    for(let i = 0; i < A.length; i++){
// 	        for(let j = 0; j < A[0].length; j++){
// 	            if(A[i][j] == 1){
// 	                dist[i][j] = 0;
// 	                q.push([i, j]);
// 	            }
// 	        }
// 	    }

// 	    while(q.length){
// 	        let val = q.shift();
// 	        let u = val[0];
// 	        let v = val[1];
	        
// 	        if(A[u][v] != 2){
// 	            A[u][v] = 2;
	            
// 	            if(u - 1 >= 0){
// 	                dist[u - 1][v] = Math.min(1 + dist[u][v], dist[u - 1][v]);
// 	                q.push([u - 1, v]);
// 	            }
// 	            if(v - 1 >= 0){
// 	                dist[u][v - 1] = Math.min(1 + dist[u][v], dist[u][v - 1]);
// 	                q.push([u, v - 1]);
// 	            }
	            
// 	            if(u + 1 < A.length){
// 	                dist[u + 1][v] = Math.min(1 + dist[u][v], dist[u + 1][v]);
// 	                q.push([u + 1, v]);
// 	            }
	            
// 	            if(v + 1 < A[0].length){
// 	                dist[u][v + 1] = Math.min(1 + dist[u][v], dist[u][v + 1]);
// 	                q.push([u, v + 1]);
// 	            }
// 	        }
// 	    }
	    
// 	    return dist;

// }


// console.log(solve([[1, 1, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0]]));


// Semester course complete

// function solve(A, B, C){
//   let adj = Array(A + 1).fill().map(()=> []);
//   let ndeg = Array(A + 1).fill(0);

//   for(let i = 0; i < B.length; i++){
//       let u = B[i];
//       let v = C[i];
//       adj[u].push(v);
//       ndeg[v]++;
//   }

//   let q = [];

//   for(let i = 1; i < ndeg.length; i++){
//       if(ndeg[i] == 0){
//           q.push(i);
//       }
//   }

//   if(q.length == 0){
//       return 0;
//   }
//   let visited = Array(A + 1).fill(false);
//   while(q.length){
//       let val = q.shift();

//       if(visited[val]){
//           return 0;
//       }else{
//           visited[val] = true;
//           for(let i =0; i < adj[val].length; i++){
//               ndeg[adj[val][i]]--;
//               if(ndeg[adj[val][i]] == 0){
//                   q.push(adj[val][i]);
//               }
//           }
//       }
//   }

//   for(let i = 1; i < visited.length; i++){
//       if(!visited[i]){
//           return 0;
//       }
//   }

//   return 1;
// }


// console.log(solve(5, [1,3,4,5], [2,1,5,3]));



// Rotten Oranges



// function solve(A){
//   let q = [];

//   for(let i = 0; i < A.length; i++){
//       for(let j = 0; j < A[0].length; j++){
//           if(A[i][j] == 2){
//               q.push([i, j, 0]);
//           }
//       }
//   }

//   let time = -1;

//   while(q.length){
//       let val  = q.shift();
//       let i = val[0];
//       let j = val[1];
//       let t = val[2];

//       if(i + 1 < A.length && A[i + 1][j] == 1){
//           A[i + 1][j] = 2;
//           q.push([i + 1, j, t + 1]);
//           time = Math.max(time, t + 1);
//       }
//       if(i - 1 >= 0 && A[i - 1][j] == 1){
//           A[i - 1][j] = 2;
//           q.push([i - 1, j, t + 1]);
//           time = Math.max(time, t + 1);
//       }
//       if(j + 1 < A[0].length && A[i][j + 1] == 1){
//           A[i][j + 1] = 2;
//           q.push([i, j + 1, t + 1]);
//           time =  Math.max(time, t + 1);
//       }
//       if(j - 1 >= 0 && A[i][j - 1] == 1){
//           A[i][j - 1] = 2;
//           q.push([i, j - 1, t + 1]);
//           time = Math.max(time, t + 1);
//       }
//   }

//   for(let i = 0; i < A.length; i++){
//       for(let j = 0; j < A[0].length; j++){
//           if(A[i][j] == 1){
//               return -1;
//           }
//       }
//   }

//   return time;
// }

// console.log(solve([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));


// function solve(A){
//   let dsu = Array.from(Array(4), (_, index) => index);
//   return dsu;
// }


// console.log(solve(4));
