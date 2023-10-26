// DEQUE: fila de duas pontas (double-ended queue); fila especial que permite remover elementos do final ou da frente da fila.
// Utiliza tanto FIFO (First In First Out) quanto LIFO (Last In First Out)

export default class Deque{
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    addFront(element) {
        if(this.isEmpty()) {
            this.addBack(element)
        }
        else if(this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else { // exemplo [A,B,C,D, count]  count = 4, numero de elementos = 4, indice de 'D' = 3,
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items [i - 1]
            } // lembre-se que o count sempre está uma contagem a frente pois a adição no final o incrementa. então está pegando a posição vazia já incrementada pelo addBack e está armazenando o valor do ultimo elemento, no caso preenchido. é como se ele estivesse sendo empurrado para trás.
            this.count++
            this.lowestCount = 0
            this.items[0] = element // antes dessa linha de código o primeiro elemento estava duplicado [A,A,B,C,D]
        }
    }

    addBack(element) {
        this.items[this.count] = element
        this.count++
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    removeBack() {
        if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
    } //mesmo método do .pop() do Stack

    peekFront() {
        if (this.isEmpty()){
            undefined
        }
        return this.items[this.lowestCount]
    }

    peekBack() {
        return this.items[this.count -1] // ocerto é count e não length, length é um método para strings.
    }

    isEmpty() {
        return this.count - this.lowestCount === 0

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
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount +1; i < this.count; i++)
        {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }

}

/* const deque = new Deque()
console.log(deque.isEmpty())
deque.addBack('Carol')
deque.addBack('Camila')
console.log(deque.isEmpty())
console.log(deque.toString())
deque.addFront('Marcos')
deque.addFront('Wm')
console.log(deque.toString())
console.log('Tamanho da fila: ' + deque.size())
deque.removeBack()
console.log(deque.toString())
deque.removeFront()
console.log(deque.toString())
deque.addFront('Wm')
console.log(deque.toString())
console.log(deque.peekBack())
console.log(deque.peekFront())
console.log(deque.size())
console.log(deque.clear())
console.log(deque.size())
console.log(deque.toString()) */
