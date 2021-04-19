class Stack {
    constructor() {
      this.stack = [];
    }
    print(x){
        let num = x;
        while(num >=1){
            this.stack.push(Math.floor(num%2))
            num = Math.trunc(num/2)
        }
        return this.stack
        
    }
}
const stack = new Stack();
stack.print(45);

