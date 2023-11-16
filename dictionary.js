import { defaultToString } from './util'
import ValuePair from './valuePair'

export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null
    }

    set(key, value) {
        if(key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new ValuePair(key, value)
            return true
        }
        return false
    }

    remove(key) {
        if(this.hasKey(key)) {
            delete this.table[this.toString(key)]
            return true
        }
        return false
    }

    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    } // or access twice the hash
    /* get(key) {
        if(this.hasKey(key)) {
            return this.table[this.toStrFn(key)]
        }
        return undefined
    } */

    keyValues() {
        return Object.values(this.value)
    }
    // ES2017 disponibilizou esse método caso não fosse possível a lógica seria a seguinte
   /*  keyValues() {
        const valuePairs = []
        for (const k in this.table) {
            if(this.hasKey(k)) {
                valuePairs.push(this.table[k])
            }
        }
        return valuePairs
    } */

    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }
    // alternative
    /* 
    
    const keys = []
    const valuePairs = this.keyValues()
    for(let i = 0; i < valuePairs.length; i++) {
        keys.push(valuesPairs[i].key)
    }
    return keys

    */

    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if(result === false) {
                break;
            }
        }
    }

    clear() {
        table = {}
    }

    isEmpty() {
        if(table === null) {
            return true
        }
        return false
    }
}