function solve(A){
    function countMerge(arr, s, m, e){
        let i = s;
        let j = m + 1;
        let c = [];
        let cnt = 0;

        while(i <= m && j <= e){
            if(arr[i] <= arr[j]){
                c.push(arr[i]);
                i++;
            }else{
                cnt = cnt + (m - i + 1);
                c.push(arr[j]);
                j++;
            }
        }

        while(i <= m){
            c.push(arr[i]);
            i++;
        }
        while(j <= e){
            c.push(arr[j]);
            j++;
        }
        let k = 0;
        for(let i = s; i <= e; i++){
            arr[i] = c[k];
            k++;
        }

        return cnt;
    }

    function count(arr, s, e){
        if(s == e) return 0;

        let m = Math.floor((s + e)/ 2);

        let L = count(arr, s, m);
        let R = count(arr, m + 1, e);
        let C = countMerge(arr, s, m, e);
        return L + R + C;
    }

    return count(A, 0, A.length - 1);
}


console.log(solve([45,10,15,25,50]));