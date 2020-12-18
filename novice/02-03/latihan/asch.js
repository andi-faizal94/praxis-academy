// // callback
// function calc(p1, p2, callback) {
//     result = p1 + p2;
//     if (typeof calc == 'function') {
//         result = callback(p1, p2);
//         return result;
//     }
// }
// calcB = calc(12, 3, function(a, b) {
//     return (a / b)
// });
// console.log(calcB);

// // promise
// function handlingData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(respon => respon.json())('https://jsonplaceholder.typicode.com/todos/1')
//         .then(respons => {
//             console.log("ini hasil data yang diperoleh :", respons)
//         })
// }
// handlingData();
// console.log(handlingData);

// // async /await

// async function handlingData() {
//     let request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let respons = await request.json()
//     console.log("ini hasil data yang diperoleh", respons)
// }
// handlingData();
// console.log(handlingData);


// promise
// class Car {
//     constructor(brand, tahun) {
//         this.brand = brand;
//         this.tahun = tahun;
//     }
// }
// var CarA = new Car('honda', '2013')
// console.log(CarA = new Car('honda', 2013));

// callback 

// console.log('hello');
// tunda console.log javascript selama 100 milisecond
// setTimeout(() => {
//     console.log('Javascript')
// }, 100)
// console.log('coder');
// proses menunggu dan di eksekusi setelah 200 milisecond
// setTimeout(() => {
// console.log('hai')
// }, 200)
// ini yang di eksekusi terlebih dahulu
// console.log('bandui')

// callback sebagai injeksi sebuah fungsi
// (function andi() {
//     var a = 10;
//     var b = 10;
//     var result = a * b;
//     console.log(result);
// })();



class Error {
    constructor(message) {
        this.message = message;
        this.name = "error";
        this.stack = "callstack";
    }
}

class ValidatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validations error";
    }
}

function test() {
    throw new ValidatorError("whoops!")
}

try {
    test();
} catch (err) {
    alert(err.message);
    alert(err.name);
    alert(err.stack);
}