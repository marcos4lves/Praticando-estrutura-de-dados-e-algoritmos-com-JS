import DoublyLinkedList from './doubleLinkedList'

class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList()
    }
    
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.removeAt(this.size() - 1)
    }
}