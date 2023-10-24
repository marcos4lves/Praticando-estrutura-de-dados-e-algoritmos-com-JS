// QUEUE:Fila é uma coleção ordenada de itens baseada em FIFO (First In First Out), primeiro que entra é o primeiro que sai.
// também conhecido como first-come-first-served.

class Queue{
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if (this.isEmpty()) {
            undefined
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return  this.count - this.lowestCount === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    toString() {
        if (this.isEmpty()){
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++)
        {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
    

}

const queue = new Queue ()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())

queue.enqueue('Camila')
console.log(queue.toString())

console.log(queue.size())
console.log(queue.isEmpty())
console.log('Remove:')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log('----')
console.log(queue.toString())