import Node from './node'
import LinkedList from './linkedList'
import defaultEquals from './util'

// Lista duplamente encadeada 

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next)
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
        this.tail = undefined
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head 
            if (index === 0) { // inserção no início da lista
                if (this.head == null) { // caso especial de lista vazia
                    this.head = node
                    this.tail = node
                } else { // caso que já exista elementos na lista e quer colocar um elemento no index 0
                    node.next = this.head // o next do node criado será o antigo head ou seja o nó do index 0
                    current.prev = node // o nó atual.prev aponta pro nó criado agora
                    this.head = node  // atualiza o head apontando para esse nó criado agora, tornando-o o primeiro
                    // atualiza o next desse novo nó criado para apontar para o antigo primeiro nó
                }
            }
            else if (index === this.count) { // inserção no final da lista
                current = this.tail // atualiza current para this.tail logo current passa a ser undefined
                current.next = node
                node.prev = current
                this.tail = node
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            }
            this.count++
            return true
        }
        return false
    }
}

