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
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node
                } else { 
                    node.next = this.head
                    current.prev = node
                    this.head = node
                    
                }
            }
            else if (index === this.count) {
                current = this.tail
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

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count -1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
        }
        return undefined
    }

    indexOf(element) {
        let current = this.head
        let index = 0
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    getHead() {
        return this.head
    }

    getTail() {
        return this.tail
    }

    clear() {
        super.clear()
        this.tail = undefined
    }

    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        while (current != null) {
            objString = `${objString}, ${current.element}`
            current = current.next
        }
        return objString
    }

    inverseToString() {
        if (this.tail == null) {
        return ''
        }
        let objString = `${this.tail.element}`
        let previous = this.tail.prev
        while (previous != null) {
            objString = `${objString}, ${previous.element}`
            previous = previous.prev
        }
        return objString
    }
}