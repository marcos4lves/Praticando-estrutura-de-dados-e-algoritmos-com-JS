import defaultEquals from "./util"
import LinkedList from "./linkedList"
//Lista circular não precisa de nenhuma implementação basta sobrescrever os métodos insert e removeAt 

class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn)
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node (element)
            let current = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    node.next = this.head
                } else {
                    node.next = current
                    current = this.getElementAt(this.size())
                    this.head = node
                    current.next = this.head
                }
            } else {
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
    return false
    }

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined
                } else {
                    const removed = this.head
                    current = this.getElementAt(this.size())
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            } else { // não há necessidade de atualizar o ultimo elemento da lista circular
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            
        }
        return undefined
    }
}