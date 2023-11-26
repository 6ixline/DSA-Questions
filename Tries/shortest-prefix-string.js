class Node{
    constructor(){
        this.children = Array(26).fill(null);
        this.countOfWord = 0;
    }
}

class Tries{
    constructor(){
        this.root = new Node("#");
    }

    insert(word){
        let cur = this.root;
        let l = word.length;
        for(let i = 0; i < l; i++){
            let idx = word.charCodeAt(i) - 97;
            if(cur.children[idx] == null){
                cur.children[idx] = new Node(word.charAt(i));
            }
            cur.countOfWord++;
            cur = cur.children[idx];
        }
    }

    search(word){
        let cur = this.root;
        let l = word.length;
        let prefix = "";
        for(let i = 0; i <= l; i++){
            if(cur.countOfWord <= 1){
                break;
            }
            prefix += word[i];
            let idx = word.charCodeAt(i) - 97; 
            cur = cur.children[idx];
        }

        return prefix;
    }
}


function solve(arr){
    let trie = new Tries();


    for(let i = 0; i < arr.length; i++){
        trie.insert(arr[i]);
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = trie.search(arr[i]);
    }
    return arr;
}


console.log(solve(["geeksgeeks", "geeksquiz", "geeksforgeeks"]))