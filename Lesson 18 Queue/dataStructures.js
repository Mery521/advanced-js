export class Queue {
    constructor() {
        this.elements = []
    }

    enqueue(data) {
        this.elements.push(data)
    }

    dequeue() {
        this.elements.shift()
    }

    peek() {
        return this.elements[0]
    }

    isEmpty(){
        return this.elements.length === 0
    }
}
