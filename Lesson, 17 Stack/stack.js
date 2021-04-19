
class Stack {
    constructor() {
      this.elements = [];
    }
    push(data) {
      this.elements.push(data);
    }
    pop() {
      this.elements.pop();
    }
    top() {
      return this.elements[this.elements.length - 1];
    }
    size() {
      return this.elements.length;
    }
    isEmpty() {
      return this.elements.length === 0;
    }
  }

class RenderStack extends Stack {
    constructor() {
      super()
      this.uuid = 1
      this.mount()
      this.events()
    }

    mount() {
      const container = document.createElement("div")
      this.stack = document.createElement("div")

      this.pushBtn = document.createElement("button")
      this.popBtn = document.createElement("button")
      this.pushBtn.innerText = "push"
      this.popBtn.innerText = "pop"
      const btnGroup = document.createElement("div")
      btnGroup.append(this.pushBtn)
      btnGroup.append(this.popBtn)

      container.append(btnGroup)
      container.append(this.stack)

      const app = document.getElementById("app")
      app.append(container)

      btnGroup.className = "btn-group"  
      this.pushBtn.className = "btn btn-push"
      this.popBtn.className = "btn btn-pop"
      this.stack.className = "stack" 
      container.className = "container"
    }

    events() {
      this.pushBtn.addEventListener("click", () => this.push())
      this.popBtn.addEventListener("click", () => this.pop())
    }

    push() {
      super.push(this.uuid++)
      this.render()
    }

    pop() {
      super.pop()
      if (this.isEmpty()) {
        this.uuid = 1
      }
      this.render()
    }

    render() {
      this.stack.innerHTML = "";
      for(let i = this.elements.length-1; i >= 0; i--){
        const element = document.createElement("div")
          element.innerText = this.elements[i]
          element.className = "btn1 element"
          this.stack.append(element)
        }
    }
}

new RenderStack()