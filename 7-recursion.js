function factorialIterative(number) {
    let total = 1
    for (let n = number; n > 1; n--) {
        total = total * n
    }
    return total
}

console.log(factorialIterative(5))


function factorial(n) {
    //console.trace()
    if (n === 1 || n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))


function fibonacciIterative(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    let fibNMinus2 = 0
    let fibNMinus1 = 1
    let fibN = n
    for (let i = 2; i <= n; i++) { // n >= 2
        fibN = fibNMinus1 + fibNMinus2 // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1
        fibNMinus1 = fibN
    }
    return fibN
}
console.log(fibonacciIterative(8))


function fibonacci(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(8))

function fibonacciMemoization(n, memo = {}) {
    if (n <= 1) return n

    if (memo[n] != null) {
        return memo[n]
    }

    memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)

    return memo[n]
}
const resultMemoization = fibonacciMemoization(8);
console.log(resultMemoization)

