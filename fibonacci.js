var fibonacci = [1, 1];
console.time('fibonacci')
for (var i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci[i]);
}
console.timeEnd('fibonacci')
