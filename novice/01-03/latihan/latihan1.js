// A Function Declaration
function number() {
    let x = 10;
    console.log(x);
}
number();

// A Function Expressions
let andi = function() {
    let andi = 100;
    console.log(andi);
}
andi();

// Arrow Function Expression
let name = andi => {
    let name = 1000;
    console.log(name);
}

// tanpa param 
let a = () => console.log(10);
a();

// dengan parameter 
let b = (a) => {
    console.log(a);
}
b('i love you');

// hoisting
function catName(nama) {
    console.log("Kucingku bernama " + nama);
}

catName("Nimo");