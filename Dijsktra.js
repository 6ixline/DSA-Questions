function solve(A, B, C){

    let adj = Array(A).fill().map(()=> []);

    for(let i = 0; i < B.length; i++){
        let u = B[i][0];
        let v = B[i][1];
        let w = B[i][2];

        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }


    let options = new MinHeap();
    let dist = Array(A).fill(-1);
    dist[C] = 0;
    options.add([0, C])

    while(options.heap.length > 0){
        let [w, n] = options.remove();
        
        if(w == dist[n]){
            for(let i = 0; i < adj[n].length; i++){
                let [nd, wt] = adj[n][i];

                if(w + wt < dist[nd] || dist[nd] == -1){
                    dist[nd] = wt + w;
                    options.add([dist[nd], nd]);
                }
            }
        }
    }

    return dist;

    
}




class MinHeap{
    constructor(){
        this.heap = [];
    }

    // Helper function 
    hasParent(index){
        return Math.floor((index - 1) / 2) >= 0;
    }
    parent(index){
        let parentIndex = Math.floor((index - 1) / 2);
        return this.heap[parentIndex][0];
    }
    parentIndex(index){
        return Math.floor((index - 1) / 2);
    }
    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }
    hasLeftChild(index){
        return ((2 * index) + 1) < this.heap.length; 
    }
    leftChildIndex(index){
        return ((2 * index) + 1);
    }
    leftChild(index){
        return this.heap[((2 * index) + 1)][0];
    }
    hasRightChild(index){
        return ((2 * index) + 2) < this.heap.length;
    }
    rightChildIndex(index){
        return ((2 * index) + 2);
    }
    rightChild(index){
        return this.heap[((2 * index) + 2)][0];
    }
    

    // Insert
    heapifyUp(){
        let index = this.heap.length - 1;
        while(this.hasParent(index) && this.parent(index) > this.heap[index][0]){
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    add(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    // Peek
    peek(){
        return this.heap[0];
    }

    // remove
    remove(){
        let temp = this.heap[0];
        this.swap(0, this.heap.length - 1);
        this.heap.pop();
        this.heapifyDown();
        return temp;
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerIndex = this.leftChildIndex(index);

            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallerIndex = this.rightChildIndex(index);
            }

            if(this.heap[index][0] < this.heap[smallerIndex][0]){
                break;
            }else{
                this.swap(smallerIndex, index);
            }
            index = smallerIndex;
        }

    }
}

console.log(solve(5, [[0, 3, 4], [2, 3, 3], [0, 1, 9], [3, 4, 10], [1, 3, 8]], 4))



class MinHeapCheck{
    constructor(){
        this.heap = [];
    }


    hasParent(index){
        return Math.floor(index - 1 / 2) >= 0;
    }

    parentIndex(index){
        return Math.floor(index - 1 / 2);
    }

    parent(index){
        return this.heap[Math.floor(index - 1 / 2)];
    }

    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    hasLeftChild(index){
        return (2 * index + 1) < this.heap.length;
    }
    leftChildIndex(index){
        return (2 * index + 1);
    }
    leftChild(index){
        return this.heap[(2 * index + 1)];
    }
    hasRightChild(index){
        return (2 * index + 2) < this.heap.length;
    }
    RightChildIndex(index){
        return (2 * index + 2);
    }
    rightChild(index){
        return this.heap[(2 * index + 2)];
    }


    peek(){
        return this.heap[0];
    }

    remove(){
        this
    }
}