import defaultEquals from './util.js'
import Node from './node.js'

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
                let previous
                for (let i = 0; i < index; i++) { // para no indice anterior ou index  entao se for deletar o index 4 para no 3
                    // Quando chegamos ao índice especificado para a remoção, current estará no nó que queremos remover, e previous estará no nó anterior a ele, e current.next será o nó que iremos conectar com o previous.next, eliminando current.
                    previous = current // valor do nó  ( 3º no caso do exemplo comentado)
                    current = current.next // valor do próximo nó ( 4º no caso do exemplo) 
                }
                previous.next = current.next
            }
            this.count-- // diminuiu a contagem pq deletou obvio.
            return current.element // retorna o deletado 
            }
    return undefined
    }
}

const list = new LinkedList()
list.push(15)
console.log(list)
list.push(10)
console.log(list)

