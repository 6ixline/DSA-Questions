function mergeSort(arr, s, e){
    if(s == e) return;
    let m = Math.floor(s + (e - s) / 2);
    mergeSort(arr, s, m);
    mergeSort(arr, m + 1, e);
    merge(arr, s, m, e);
}


function merge(A, s, m, e){
    let p1 = s, p2 = m + 1;
    let la = [];
    let ra = [];
    while(p1 <= m){
       la.push(A[p1]);
       p1++;
    }
    while(p2 <= e){
       ra.push(A[p2]);
       p2++;
    }

    p1 = 0;
    p2 = 0;
    let k = s;  
    while(p1 < la.length && p2 < ra.length){
        if(la[p1] <= ra[p2]){
            A[k] = la[p1];
            p1++;
        }else{
            A[k] = ra[p2];
            p2++;
        }
        k++;
    }

    while(p1 < la.length){
        A[k] = la[p1];
        k++;
        p1++;
    }

    while(p2 < ra.length){
        A[k] = ra[p2];
        k++;
        p2++;
    }
}

let arr = [2, 3, 10, 4, 5, 6];

mergeSort(arr, 0, 5);
console.log(arr);

