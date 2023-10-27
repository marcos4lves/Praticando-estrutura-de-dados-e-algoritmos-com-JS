import Deque from './praticeDeque.js'

function palindromeChecker(aString){
    if(aString === undefined || aString === null || (aString !== null & aString.length === 0)){
        return false;
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('') //coloca em minúsculo, retorna um array de string dividindo os elementos por onde estava o parametro do split, que no caso é o espaço, e por fim join pega um ARRAY e retorna uma string com o separador dentro do parametro, que no caso é nada então vai vir juntos
    let isEqual = true 
    let firstChar, lastChar
    for (let i = 0; i < lowerString.length; i++){
        deque.addBack(lowerString.charAt(i)) // esse método charAt retorna o caractere na posição especificada de uma string, aqui fazemos a palavra ou frase invertida
    }
    while (deque.size() > 1 && isEqual) { // se for impar a frase ou palavra, o deque ficará só com 1 caractere que nao fará diferença pra palindromes
        firstChar = deque.removeFront() 
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            isEqual = false
        }

        // esse while para quando isEqual ficar false ou o deque ficar menor que 2.
    }
    return isEqual
}

console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('leVeL', palindromeChecker('leVeL'))
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'))
console.log('Step on no pets', palindromeChecker('Step on no pets'))
console.log('Marcos', palindromeChecker('Marcos'))
