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
       return this.head === null  
    }
      
    printList(){
        let node = this.head;
        while(node !== null){
          document.write(node.data + " >> ");
          node = node.next;
        }
    }

    getNode(index) {
        let node = this.head;
        let nodeIndex = 0;
        while (index > nodeIndex) {
          node = node.next;
          nodeIndex++;
        }
        return node;
    }

    getLast(){
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      return node;
    }
      
    removeFrom(index){
      if(index < 0 || index > this._size - 1) return false;

      if(index === 0){
        this._removeNode(this.head)
        return true;
      }

      const prevNode = this.getNode(index - 1);
      this._removeNode(prevNode)
      return true;
    }

    removeNode(node) {
      if(node === this.head){
        this._removeNode(node)
        return true;
      }

      let tempNode = this.head;
      while(tempNode && tempNode.next !== node){
        tempNode = tempNode.next;
      }
        
      if(tempNode) {
          this._removeNode(tempNode)
          return true;
      }

      return false;
    }

    _removeNode(prevNode){
         if(prevNode === this.head){
            this.head = this.head.next;
         } else {
            prevNode.next = prevNode.next.next
         }
         this._size--;
    }
}

  const linkedList = new LinkedList(new Node(4));
  linkedList.add(8);
  linkedList.add(16);
  linkedList.add(32);
  linkedList.size();

  linkedList.isEmpty();
  linkedList.printList();
  linkedList.getNode(2);
  linkedList.getLast();
  linkedList.removeFrom(2);
 // linkedList.removeNode(8);
