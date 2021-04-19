import { Queue } from "./dataStructures"

class RenderQueue extends Queue {
    constructor() {
        super()

        this.uuid = 1
        this.mount()
        this.events()
    }

    mount() {
        const container = document.createElement("div")
        this.queue = document.createElement("div")

        this.enqueueBtn = document.createElement("button")
        this.dequeueBtn = document.createElement("button")
        this.enqueueBtn.innerText = "enqueue"
        this.dequeueBtn.innerText = "dequeue"
        const btnGroup = document.createElement("div")
        btnGroup.append(this.enqueueBtn)
        btnGroup.append(this.dequeueBtn)

        container.append(btnGroup)
        container.append(this.queue)

        const app = document.getElementById("app")
        app.append(container)

        btnGroup.className = "btn-group"
        this.enqueueBtn.className = "btn btn-enqueue"
        this.dequeueBtn.className = "btn btn-dequeue"
        this.queue.className = "queue"
        container.className = "container"
    }

    events() {
        this.enqueueBtn.addEventListener("click", () => this.enqueue())
        this.dequeueBtn.addEventListener("click", () => this.dequeue())
    }

    enqueue() {
        super.enqueue(this.uuid++)
        this.render()
    }

    dequeue() {
        super.dequeue()
        if (this.isEmpty()) {
            this.uuid = 1
        }
        this.render()
    }

    render() {
        this.queue.innerHTML = ""
        this.elements.forEach((el) => {
            // 1. create div
            const element = document.createElement("div")
            // 2. div data
            element.innerText = el
            element.className = "element"
            // 3. div append container
            this.queue.append(element)
        })
    }
}

new RenderQueue()
new RenderQueue()
new RenderQueue()
// renderQueue.
