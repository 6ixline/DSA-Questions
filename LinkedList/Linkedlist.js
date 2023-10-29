class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val){
        let node = new Node(val);

        if(this.head == null){
            this.head = node;
        }else{
            let cur = this.head;

            while(cur.next){
                cur = cur.next;
            }

            cur.next = node;
        }

        this.size++;
    }

    removeIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Give valid index");
        }else{
            let cur = this.head;
            let prev = null;
            let i = 0;
            if(i == index){
                this.head = cur.next;
            }else{
                
                while(i != index){
                    i++;
                    prev = cur;
                    cur = cur.next;
                }
    
                prev.next = cur.next;
            }
        }
    }

    printList(){
        let cur = this.head;
        let str = "";
        while(cur){
            str += cur.val + " ";
            cur = cur.next;
        }

        console.log(str);
    }

    listsize(){
        console.log(this.size);
    }
}


let ls = new LinkedList();


ls.add(10);
ls.add(11);
ls.add(12);
ls.add(13);


ls.listsize();
ls.removeIndex(0)

ls.printList();