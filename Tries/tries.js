// for lower case Letters
class Node{
    constructor(val){
        this.data = val;
        this.children = new Array(26).fill(null);
        this.isEndOfWord = false;
    }
}

class Tries{
    constructor(){
        this.root = new Node("#");
    }

    search(word){
        let l = word.length;
        let cur = this.root;
        for(let i = 0; i < l; i++){
            let idx = word.charCodeAt(i) - 97;
            if(cur.children[idx] == null){
                return false;
            }
            cur = cur.children[idx];
        }

        return cur.isEndOfWord;
    }

    insert(word){
        let l = word.length;
        let cur = this.root;
        for(let i = 0; i < l; i++){
            let idx = word.charCodeAt(i) - 97;
            if(cur.children[idx] == null){
                cur.children[idx] = new Node(word.charAt(i));
            }
            cur = cur.children[idx];
        }
        cur.isEndOfWord = true;
    }

    remove(word){
        let l = word.length;
        let cur = this.root;
        let stack = [];
        for(let i = 0; i < l; i++){
            let idx = word.charCodeAt(i) - 97;
            if(cur.children[idx] == null){
                return;
            }
            cur = cur.children[idx];
            stack.push(cur);
        }
        
        cur.isEndOfWord = false;
        
        let removeChildIdx = -1;
        while(stack.length){
            
            let cur = stack.pop();
            if(removeChildIdx != -1){
                cur.children[removeChildIdx] = null;
            } 
            if(!(cur.isEndOfWord)){
                for(let i = 0; i < cur.children.length; i++){
                    if(cur.children[i] != null){
                        return;
                    }
                }

                removeChildIdx = cur.data.charCodeAt() - 97;
                cur.isEndOfWord = false;

            }else{
                removeChildIdx = -1;
            }
        }
    }
}


let tries = new Tries();


tries.insert("hello");
tries.insert("helloWorld");
tries.insert("try");
console.log(tries.search("hello"));
tries.remove("try");
tries.insert("trying");
console.log(tries.search("trying"));