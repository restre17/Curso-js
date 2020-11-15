// Fizz Buzz - 100 numeros

//3 6 9 12 ... fizz
// 5 10 15 20... buzz
// 15 30 45 ... FIZZBUZZ!

for(let i = 1; i < 100; i++){
    i % 3 === 0 ? i % 5 === 0 ? console.log(`${i} FIZZBUZZ`) : console.log(`${i} FIZZ`) : i % 5 === 0 ? console.log(`${i} BUZZ`) : console.log(`${i}`); 
}