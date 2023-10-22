let fibonacci: number[] = [1, 1];

for (let i:number = 2; i < 10; i++){
    fibonacci[i]= fibonacci[i-1] + fibonacci[i-2]
    console.log(fibonacci[i])
}