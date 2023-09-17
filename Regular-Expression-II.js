function solve(S, P){
    let dp = new Map();

    function isCheck(i, j) {
      if (i < 0 && j < 0) {
        return 1;
      } else if (j < 0) {
        return 0;
      } else if (i < 0) {
        
        for (let k = j; k >= 0; k -= 2) {
          if (P[k] !== '*') {
            return 0;
          }
        }
        return 1;
      }

      if (dp.has(`${i}${j}`)) {
        return dp.get(`${i}${j}`);
      }

      if (S[i] == P[j] || P[j] == ".") {
        let val = isCheck(i - 1, j - 1);
        dp.set(`${i}${j}`, val);
      } else if (P[j] == "*") {
        // Case 1: '*' matches zero occurrences of the preceding character in P
        // Case 2: '*' matches one or more occurrences of the preceding character in P
        let val = (isCheck(i, j - 2) || (S[i] == P[j - 1] || P[j - 1] == '.') && isCheck(i - 1, j));
        dp.set(`${i}${j}`, val);
      } else {
        dp.set(`${i}${j}`, 0);
      }

      return dp.get(`${i}${j}`);
    }
    return isCheck(S.length - 1, P.length - 1)?1:0;

}


console.log(solve('baaaaaabaaaabaaaaababababbaab', '..a*aa*a.aba*a*bab*'));