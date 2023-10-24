import { StackArray } from './praticeStack.js'

function decimalToAllBase (decNumber, base){
    const remStack = new StackArray()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    let number = decNumber
    let rem;
    let baseString = '';

    while (number > 0){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number/base)
    }

    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }

    return baseString
}

console.log(decimalToAllBase(733, 16))