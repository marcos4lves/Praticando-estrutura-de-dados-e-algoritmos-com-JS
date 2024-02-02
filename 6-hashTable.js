// O JavaScript possui classes de estruturas de dados nativas como é o caso do map-native que é basicamente o que fizemos aqui e em Dictionary.

// Hashing consiste em encontrar um valor em uma estrutura de dados o mais rápido possível.
// quando usamos uma função hash já sabemos em que posição o valor se encontra, portanto, podemos simplesmente o acessar.
// uma função de hash é uma função que dada uma key devolve o endereço em que o valor está na tabela.
// um mapa Hash é o mesmo que uma tabela hash
// HASH LOSE-LOSE : soma dos valores ASCII de cada caractere da chave.
import { defaultToString } from "./util.js"
import ValuePair from "./valuePair.js"

//As classes HashTable e Dictionary são muito parecidos. A diferença está no fato de que, na classe Dictionary, armazenamos o ValuePair na propriedade key de table (depois de ter sido transformado em uma string); na classe HashTable, geramos um número a partir da key (hash) e armazenamos o ValuePair na posição (ou propriedade) hash.

// como se pode observar há conflito de hashCode no qual fica registrado o último adicionado
// para resolver isso podemos usar encadeamento separado (separate chaining) ou sondagem linear(linear probing) e hashing duplo (double hashing)
// porém há o custo maior de armazenagem: usa uma linkedList aonde se repetirá.
// mas ainda assim observa-se que o hashCode() causa muitos conflitos por isso refatoramos com um novo código -> djb2HashCode() que está abaixo.

export default class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    loseloseHashCode(key) {
        if(typeof key === 'number') {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for(let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }

    /* djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  } */

    hashCode(key) {
        return this.loseloseHashCode(key)
    }

    put(key, value) { // semelhante ao set do dictionary mas convencionalmente é chamado de put e nao set.
        if(key != null && value != null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }
    
    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if(valuePair != null) {
            delete this.table[hash] // em vez de usar o operador delete do JS podemos também atribuir null ou undefined à posição do hash removida.
            return true
        }
        return false
    }

    size() {
        return Object.keys(this.table).length;
    }

    isEmpty() {
        return this.size() === 0
    }

    toString() {
        if(this.isEmpty()) {
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
        for(let i = 1; i < keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${this.table[keys[i]].toString()}}`
        }
        return objString
    }
}

const hash = new HashTable()
/* hash.put('Marcos', 'marcosuser@teste.com')
hash.put('Vinicius', 'viniciususer@teste.com')
hash.put('Alves', 'alvesuser@teste.com')
console.log(hash.hashCode('Marcos') + ' - Marcos')
console.log(hash.hashCode('Vinicius') + ' - Vinicius')
console.log(hash.hashCode('Alves') + ' - Alves')

console.log(hash.get('Marcos'))
console.log(hash.get('Aleatorio'))
hash.remove('Vinicius')
console.log(hash.get('Vinicius')) */

// tratamento de exceções

/* hash.put('Ygritte', 'ygritte@email.com') // hashCode = 4
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

console.log(hash.toString()) */

