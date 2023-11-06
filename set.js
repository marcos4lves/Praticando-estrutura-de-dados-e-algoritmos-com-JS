// Set: ou 'conjunto' é uma estrutura de dados onde o valor não se repete. Útil para lista de usuários únicos em um sistemas por exemplo.

class Set {
    constructor() {
        this.items = {}
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }
    
    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

/* sizeLegacy() {
    let count = 0
    for(let key in this.items) {
        if(this.items.hasOwnProperty(key)) {
            count++
        }
    }
    return count
} */

    values() {
        return Object.values(this.items)
    }

/* valuesLegacy() {
    let values = []
    for(let key in this.items) {
        if(this.items.hasOwnProperty(key)) {
            values.push(key)
        }
    }
    return values
} */

    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => unionSet.add(value))
        otherSet.values().forEach(value => unionSet.add(value))
        return unionSet
    }

    /* union(otherSet) {
        const unionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for (let i = 0; i < values; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    } */

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    


}

/* const set = new Set()
set.add(1)
set.add(2)
set.add(13)
console.log(set.size())
set.delete(1)
console.log(set.size())
console.log(set.has(13))
console.log(set.values()) */

const setA = new Set()
setA.add(10)
setA.add(22)
setA.add(34)
setA.add(72)
setA.add(55)
console.log(setA)
const setB = new Set()
setB.add(33)
setB.add(22)
setB.add(34)
setB.add(53)
setB.add(55)
console.log(setB)
const intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values())
const unionAB = setA.union(setB)
console.log(unionAB.values())
