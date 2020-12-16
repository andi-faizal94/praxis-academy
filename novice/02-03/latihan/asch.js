// callback
function calc(p1, p2, callback) {
    result = p1 + p2;
    if (typeof calc == 'function') {
        result = callback(p1, p2);
        return result;
    }
}
calcB = calc(12, 3, function(a, b) {
    return (a / b)
});
console.log(calcB);

// promise
function handlingData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respon => respon.json())('https://jsonplaceholder.typicode.com/todos/1')
        .then(respons => {
            console.log("ini hasil data yang diperoleh :", respons)
        })
}
handlingData();
console.log(handlingData);

// async /await

async function handlingData() {
    let request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let respons = await request.json()
    console.log("ini hasil data yang diperoleh", respons)
}
handlingData();
console.log(handlingData);