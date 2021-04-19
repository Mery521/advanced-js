class Node{
    constructor(data, nextNode){
      this.data = data;
      this.nextNode = nextNode
    }
  }
  
  class Stack {
      constructor() {
        this.top = null;
      }
      push(data) {
        let node = new Node(data,this.top)
        this.top = node;
        this.print()
      }
      print(){
        let ptr = this.top
        while(ptr){
            console.log(ptr.data);
            ptr = ptr.nextNode
        }
      }
      pop() {
        let data = null
        if(this.pop){
           data = this.top.data
           this.top = this.top.nextNode
        }
        this.print();
        return data;
      }


    }

    let stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.pop()