class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class LinkedList {
    constructor(head = null) {
      this.head = head;
      this._size = head ? 1 : 0;
    } 
    add(data) {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = new Node(data);
      this._size++;
    }
    insertAt(data, index) {
      if (index > this._size) return false;
      if (index === this._size) {
        this.add(data);
        return true;
      }
      let nodeIndex = 0;
      let node = this.head;
      while (nodeIndex !== index) {
        node = node.next;
        nodeIndex++;
      }
      const newNode = new Node(data);
      newNode.next = node.next;
      node.next = newNode;
      this._size++;
    }
    size() {
      return this._size;
    }
    clear() {
      this.head = null;
    }

    isEmpty() {
       return this.head === null;
         
    }
    printList(){
        let list = this.head;
        while(list !== null){
          document.write(list.data + " >> ");
          list = list.next;
        }
    }
    getNode(index) {
        let findIndex = this.head;
        let q = 0;
        while (index > q) {
          findIndex = findIndex.next;
          q++;
        }
        return findIndex;
      }
      
    getLast(){
      let findLastNode = this.head;
      while (findLastNode.next) {
        findLastNode = findLastNode.next;
      }
      return findLastNode;
    }
    removeFrom(index){
      let removeIndex = this.getNode(index);
      while(removeIndex.next == null){
        this._size--;
      }
      return removeIndex;
    }
    indexOf(node){
      let temp = this.head;
      let value = 0; 
      console.log(temp.next<node)
      while(temp.next < node){
        temp = temp.next;
        value++ 
      }
     
      console.log(value)
       return value;
    }
}
  const linkedList = new LinkedList(new Node(4));
  linkedList.add(8);
  linkedList.add(16);
  linkedList.add(32);
  linkedList.size();

  // linkedList.isEmpty();
  // linkedList.printList();
   //linkedList.getNode(2);
  // linkedList.getLast();
  // linkedList.removeFrom(2);
  linkedList.indexOf(8);
 
