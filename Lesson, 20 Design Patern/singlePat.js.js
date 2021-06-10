// Single Ton Pattern
class BMW {
    constructor(){
        if(BMW.instance) {
            return BMW.instance
        }
        // constructor creation logic
        this.model = "M3"
        BMW.instance = this
    }
}
let bmw = new BMW()
let bmw1 = new BMW()
bmw === bmw1 // true

function Sony(){
    this.name = "sony"
}
function LG(){
    this.name = "LG"
}
function Dell(){
    this.name = "Dell"
}
function createComputer(mark){
     switch(mark){
        case "Sony": return new Sony();
        case "LG": return new LG();
        case "Dell": return new Dell();
    }
}
let lg = createComputer("LG")
let sony = createComputer("Sony")

class Subject {
  constructor() {
    this.observers = [];
  }
  // Add an observer to this.observers.
  addObserver(observer) {
    this.observers.push(observer);
  }
  // Remove an observer from this.observers.
  removeObserver(observer) {
    const removeIndex = this.observers.findIndex(obs => {
      return observer === obs;
    });
    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }
  // Loops over this.observers and calls the update method on each observer.
  // The state object will call this method everytime it is updated.
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
}
export default Subject;
