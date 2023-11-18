import LinkedList from "./linkedList.js"
import { defaultEquals, defaultToString } from "./util.js"
import ValuePair from "./valuePair.js"
import HashTable from './hashTable.js'

// método que útiliza a técnica de encadeamento separada para tratar colisões do hashCode()
export default class HashTableSeparateChaining extends HashTable {
    constructor (toStrFn = defaultToString) {
        super()
        this.toStrFn = toStrFn
        this.table = {}
    }

    put(key, value) {
        if(key != null && value != null) {
            const position = this.hashCode(key)
            if (this.table[position] == null) {
                this.table[position] = new LinkedList()
            }
            this.table[position].push(new ValuePair(key, value))
            return true
        }
        return false
    }
    
    get(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while(current != null) {
                if(current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
        }
        return undefined
    }

    remove(key) {
        const position = this.hashCode(key)
        const linkedList = this.table[pósition]
        if(linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead()
            while(current != null) {
                if(current != null) {
                    if(current.element.key === key) {
                        linkedList.remove(current.element)
                    }
                    if(linkedList.isEmpty()) {
                        delete this.table[position]
                    }
                    return value
                }
                current = current.next
            }
        }
        return false
    }
}
const hash = new HashTableSeparateChaining()
hash.put('Ygritte', 'ygritte@email.com') // hashCode = 4
hash.put('Jonathan', 'jonathan@email.com') // hashCode = 5
hash.put('Jamie', 'jamie@email.com') // hashCode = 5
hash.put('Jack', 'jack@email.com') // hashCode = 7
hash.put('Jasmine', 'jasmine@email.com') // hashCode = 8
hash.put('Jake', 'jake@email.com') // hashCode = 9
hash.put('Nathan', 'nathan@email.com') // hashCode = 10
hash.put('Athelstan', 'athelstan@email.com')
hash.put('Sue', 'sue@email.com') // hashCode = 5
hash.put('Aethelwulf', 'aethelwulf@email.com') // hashCode = 5
hash.put('Sargeras', 'sargeras@email.com') // hashCode = 10

console.log(hash.toString())