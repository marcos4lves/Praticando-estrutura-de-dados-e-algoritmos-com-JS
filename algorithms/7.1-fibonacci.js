var fib = [1, 1];

function fibonacci(f) {
    console.time('fibonacci')
    for (var i = 2; i < f; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        console.log(fib[i]);
    }
    console.timeEnd('fibonacci')
}

console.log(fibonacci(5))