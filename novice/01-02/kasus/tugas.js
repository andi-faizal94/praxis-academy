// Tugas
// 1.Write a JavaScript program that accept two integers and display the larger.
// var num1, num2;
// num1 = window.prompt("input the first integer", "2");
// num2 = window.prompt("input the second integer", "10");
// if (parseInt(num1, 2) > parseInt(num2, 10)) {
//     console.log("The larger of" + num1 + "and" + num2 + "is" + ".");
// } else
// if (parseInt(num2, 10) > parseInt(num1, 2)) {
//     console.log("The larger of " + num1 + "and" + num2 + "is" + num2 + ".");
// } else {
//     console.log("The values" + num1 + "and" + num2 + "are equal.");
// }

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers.
// 

// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
// var a = 0;
// var b = -2;
// var c = 5;
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(a + ", " + b + ", " + c);
//     } else {
//         console.log(a + ", " + b + ", " + c);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(b + ", " + a + ", " + c);
//     } else {
//         console.log(b + ", " + c + ", " + b);
//     }
// } else if (c > a && c > b) {
//     if (a > b) {
//         console.log(c + ", " + a + ", " + b);
//     } else {
//         console.log(c + ", " + b + ", " + a);
//     }
// }

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert
// a = -6;
// b = -9;
// c = -7;
// d = 0;
// f = -2;
// if (a > b && a > c && a > d && a > f) {
//     console.log(a);
// } else if (b > a && b > c && b > d && b > f) {
//     console.log(b);
// } else if (c > a && c > b && c > d && c > f) {
//     console.log(c);
// } else if (d > a && d > c && d > b && d > f) {
//     console.log(d);
// } else {
//     console.log(f);
// }
// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// for (var a = 0; a <= 15; a++) {
//     if (a === 0) {
//         console.log(a + " is even");
//     } else if (a % 2 === 0) {
//         console.log(a + " is even");
//     } else {
//         console.log(a + " is odd");
//     }
// }


// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// var students = [
//     ['David', 80],
//     ['Vinoth', 77],
//     ['Divya', 88],
//     ['Ishitha', 95],
//     ['Thomas', 68]
// ];

// var Avgmarks = 0;

// for (var i = 0; i < students.length; i++) {
//     Avgmarks += students[i][1];
//     var avg = (Avgmarks / students.length);
// }

// console.log("Average grade: " + (Avgmarks) / students.length);

// if (avg < 60) {
//     console.log("Grade : F");
// } else if (avg < 70) {
//     console.log("Grade : D");
// } else if (avg < 80) {
//     console.log("Grade : C");
// } else if (avg < 90) {
//     console.log("Grade : B");
// } else if (avg < 100) {
//     console.log("Grade : A");
// }
// 7. Write a JavaScript program which iterates the integers from 1 to 100.
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}

// 8. According to Wikipedia a happy number is defined by the following process
function happy_number(num) {
    var m, n;
    var c = [];

    while (num != 1 && c[num] !== true) {
        c[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += n * n;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}

var cnt = 5;
var num = 1;
var f5 = '';
while (cnt-- > 0) {
    while (!happy_number(num))
        num++;
    f5 = f5 + (num + ", ");

    num++;
}
console.log('First 5 happy numbers are : ' + f5);

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits. G
function three_digit_armstrong_number() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k) {
                var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
                var plus = (i * 100 + j * 10 + k);
                if (pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}
three_digit_armstrong_number();

// Write a JavaScript program to construct the following pattern, using a nested for loop
var x, y, chr;
for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
}

// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers. 
var a = 2154; //First number
var b = 458; //Second number 
var gcd;
while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
gcd = a;
console.log(gcd);


// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000
var sum = 0;
for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
    }
}
console.log(sum);