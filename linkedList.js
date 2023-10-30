import defaultEquals from './util.js'
import Node from './node.js'

// Lista cadeada

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0 // Contador de elementos
        this.head = undefined // Referência para o primeiro nó
        this.equalsFn = equalsFn
    }

    push(element) {
        const node = new Node(element) // Criou um novo nó
        let current
        if (this.head == null) { // Se a lista estiver vazia
            this.head = node // O novo nó se torna o primeiro nó
        } else { // Se a lista não estiver vazia (já foi criado o primeiro nó)
            current = this.head  // Começa a busca pelo primeiro nó
            while (current.next != null) { 
                // Enquanto não chegar ao último move-se para o próximo nó
                // (lembrando que null é o mesmo que undefined e o ultimo por sua vez terá next undefined) então current
                // sempre terá o valor no próximo element até que o next seja undefined
                current = current.next
            }
            current.next = node// Quando chega no fim adiciona o novo node recebendo o element do push que por sua vez tem um next
        }
        this.count++ // Aumenta o contador de elementos
    }

    removeAt(index) {
        if (index >= 0 && index < this.count){ // Verifica se o index é válido 
            let current = this.head
            if (index === 0) {
                this.head = current.next // se estiver deletando o primeiro o head toma valor do next 
            } else {
                /* let previous
                for (let i = 0; i < index; i++) { // para no indice anterior ou index  entao se for deletar o index 4 para no 3
                    // Quando chegamos ao índice especificado para a remoção, current estará no nó que queremos remover, e previous estará no nó anterior a ele, e current.next será o nó que iremos conectar com o previous.next, eliminando current.
                    previous = current // valor do nó  ( 3º no caso do exemplo comentado)
                    current = current.next // valor do próximo nó ( 4º no caso do exemplo) 
                }
                previous.next = current.next */

                // refatorado pós método getElementAt
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count-- // diminuiu a contagem pq deletou obvio.
            return current.element // retorna o deletado 
            }
    return undefined
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head
            for (let i = 0; i < index && current != null; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            if (index === 0) {
                const current = this.head
                node.next = current 
                this.head = node
                //está criando um novo node e colocando o head como o next dele pq você inserir no indice 0
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                node.next = current
                previous.next = node
                // o node criado se torna o next do index anterior e o next desse node criado recebe o next do anterior
            }
            this.count++
            return true
        }
        return false
    }
    
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }

    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size() === 0
    }

    getHead() {
        return this.head
    }

    toString() {
        if (this.head == null) {
            return ''
        }
        let objString =`${this.head.element}`
        let current = this.head.next
        for (let i = 0; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }

}

const list = new LinkedList()
list.push(15)
console.log(list)
list.push(10)
list.push(35)
list.push(12)
list.push(26)
list.push(33)
list.push(42)
list.push(56)
console.log(list)
console.log(list.getElementAt(4))
list.removeAt(4)
console.log(list)
console.log(list.toString())

