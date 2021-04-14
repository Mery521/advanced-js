import { Stack } from "./dataStructures.js"

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
        this.pushBtn.innerText = "enqueue"
        this.popBtn.innerText = "dequeue"
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
        this.stack.innerHTML = ""
        this.stack.forEach((el) => {
            // 1. create div
            const element = document.createElement("div")
            // 2. div data
            element.innerText = el
            element.className = "element"
            // 3. div append container
            this.stack.append(element)
        })
    }
}

new RenderStack()
