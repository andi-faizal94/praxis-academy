let car = [{
        name: 'bmw',
        isActive: 'true',
        release: 2013
    },
    {
        name: 'honda',
        isActive: 'false',
        release: 2011
    }
];
let activeCar = [];
for (let i = 0; i < car.length; i++) {
    let m = car[i];
    if (m.isActive) {
        activeCar.push(m);
    }
}
console.log(activeCar);
let CarFP = [];
CarFP = (car.filter((a) => {
    return a.isActive;
}));
console.log(CarFP);

// function chaining

let javaScript = [{
        name: 'react',
        isActive: true,
        member: 1222
    },
    {
        name: 'vue',
        isActive: true,
        member: 200
    },
    {
        name: 'svelte',
        isActive: false,
        member: 211
    }
];
let sumFPChain = javaScript.filter((m) => {
        return m.isActive;
    })
    .map((m) => {
        return m.member - (0.1 * m.member);
    })
    .reduce((acc, m) => {
        return acc + m;
    }, 0);
console.log(sumFPChain);

// pure Function
let PI = 3.14;
const calc = (r) => r * r * PI;
calc(11);
console.log(calc(10));

// pure function benefit
var angka = [1, 2, 3, 4, 5, 6];
const incrementNumbers = (angka) => angka.map(number => number + 1);
console.log(incrementNumbers(angka));

// immutability
var number = [1, 2, 3, 4, 5, 6];
var sumOfNumber = 0;
for (var a = 0; a < number.length; a++) {
    sumOfNumber += number[a];
}
console.log(sumOfNumber);


// High Function Programing 
const capital = (word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
}
const words = "this is around the world";
const uppercaseWord = words.split(' ').map(capital)
console.log(uppercaseWord);


// currying
const myWord = (firstWord) => (secondWord) => (thirdWord) => (fourtWord) => {
    return firstWord + ' ' + secondWord + ' ' + thirdWord + ' ' + fourtWord;
}
console.log(myWord("Andi")("faizal")("belajar")("di Praxis Academy"));