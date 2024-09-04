let numbers = Array.from({ length: 30 }, (_, i) => i + 1);

console.log(numbers);

let sum = 0;
for(let i of numbers){
    sum += i
}

console.log(sum);