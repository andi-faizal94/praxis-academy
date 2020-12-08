// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// //variables

// let myVariable = 'Bob';
// myVariable = 'Steve';
// console.log(myVariable)

// // Comments
// /*
// Everything in between is a comment
//  */
// //this is comment

// // Operator

// // addition
// // var a = 10;
// // var b = 1;
// // console.log(a + b)
// // var a = "hello";
// // var b = "world";
// // console.log(a + b)
// //     // substraction 
// // var d = "20";
// // var e = "2";
// // console.log(d - e)

// // // multiline
// // var a = "20";
// // var b = "2";
// // console.log(a * b)

// // // division
// // var a = "21";
// // var b = "3";
// // console.log(a / b)
// //     // assigment
// // let myVariable1 = "Bob";
// // console.log(myVariable1)
// //     // Equality
// // let myVariable2 = 3;
// // myVariable2 === 4;
// // // not
// // let myVariable3 = 3;
// // !(myVariable3 === 3);
// // // Does-not equal
// // let myVariable5 = 3;
// // myVariable !== 1;

// // // Conditionals
// // let iceCreame = 'chocolate';
// // if (iceCreame === 'chocolate') {
// //     alert('yay,I love chocolate ice cream!');
// // } else {
// //     alert('Aww,but chocolate is my Favorite')
// // }
// // // function
// // let myVariable6 = document.querySelector('h1')
// // 1 | alert('hello');

// // // function multiply(num1, num2) {
// // // let result = num1 * num2;
// // // return result;
// // // }


// // function multiply(a, b) {
// //     let result = a * b;
// //     return result;
// // }
// // multiply(4, 5);

// // // events
// // document.querySelector('html').onclick = function() {
// //     alert('Ouch stop poking me!');
// // }
// // let myHtml = document.querySelector('html');
// // myHtml.onclick = function() {};
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/firefox.png') {
        myImage.setAttribute('src', 'image/firefox2.png');
    } else {
        myImage.setAttribute('src', 'image/firefox.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myName) {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozila is cool,' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}