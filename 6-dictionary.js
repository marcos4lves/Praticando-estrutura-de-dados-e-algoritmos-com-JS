// O JavaScript possui classes de estruturas de dados nativas como é o caso do map-native que é basicamente o que fizemos aqui e em Hash Table.

import { defaultToString } from './util.js'
import ValuePair from './valuePair.js'

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
            delete this.table[this.toStrFn(key)]
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
        return Object.values(this.table)
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

    forEach(callbackFn) { // levei um tempo para compreender mas aqui você pode criar qualquer função e usar ela como parametro no lugar de callbackFn dai ela executa para cada um. exemplo; dictionary.forEach(NovaFunçãoCriadaQueParaQuandoValue===banana)
                            /*    function stopAfterBanana(key, value) {
                        console.log(`Key: ${key}, Value: ${value}`);
                        if (key === "banana") {
                            return false; // Interrupção da iteração após encontrar "banana"
                        }
                        return true;
                        } */
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            if(result === false) {
                break;
            }
        }
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0
    }

    /* isEmpty2() {
        if(this.table === null) {
            return true
        }
        return false
    } */

    clear() {
        this.table = {}
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}` //esse toString() não é a próprio método, é o toString nativo do js
        for(let i = 1; i < valuePairs.length; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString
    }

}

const dictionary = new Dictionary()
dictionary.set('1', 'Marcos Alves')
dictionary.set('dois', 2)
dictionary.set(3, 'três')
//a ordem das propriedades de um objeto não é garantida. Os navegadores modernos geralmente mantêm a ordem de inserção ao iterar sobre as propriedades de um objeto, mas essa comportamento não é padronizado pelo ECMAScript.
console.log(dictionary.hasKey(3))
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.get('1'))
console.log(dictionary.keyValues())
console.log(dictionary.remove('dois'))
console.log(dictionary.keyValues())
console.log(dictionary.keys())
console.log(dictionary.values())

dictionary.forEach((k, v) => {
    console.log('forEach:', `key:${k}, ${v}`)
})