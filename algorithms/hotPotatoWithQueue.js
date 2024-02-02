import Queue from './praticeQueues.js'

function hotPotato(elementsList, num){
    const queue = new Queue
    const elimitatedList = []
    for (let i = 0; i < elementsList.length; i++){ // acrescentando a lista recebida no objetivo criado. FIFO
        queue.enqueue(elementsList[i])
    }
    while (queue.size() > 1){ // enquanto não resta 1, ou seja, o vencedor, opere o código a seguir:
        for (let i = 0; i < num; i++){ // enquanto 'num', que é o numero de vezes que a batata passará, ficará repetindo o loop
            queue.enqueue(queue.dequeue()) // adiciona em ultimo lugar na fila o primeiro, isso forma um ciclo0
        }
        elimitatedList.push(queue.dequeue()) // quando 'num' acaba elimina o último e o adiciona na lista de eliminados.
    }
    return { // retorna um objeto, ele nao precisa ser declarado, esse objeto tem as duas propriedades abaixo. 
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }

}

const names = ['Jhon', 'Jack', 'Camila', 'Ingrid', 'Carol']

const result = hotPotato(names, 7)

result.eliminated.forEach(name =>{
    console.log(`${name} was eliminated from the Hot Potato game.`)
})

console.log(`The winner is: ${result.winner}`)
console.log(typeof(result)) 
// result abaixo que chama a função hot Potato já é a variável declarada que armazena esse return. result se tornou um objeto.
