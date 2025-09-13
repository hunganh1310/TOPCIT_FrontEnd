const arr = [1, 2, 3, 4, 5];

let even = 0;
let odd = 0;

arr.forEach((num) => {
    num %2 === 0 ? even ++ : odd ++;
});

console.log(`Even: ${even}, Odd: ${odd}`);