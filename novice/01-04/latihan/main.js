// Object
let obj = {
    name: "faizal",
    class: "frontend developer",
    addres: "temanggung",
};
console.log(
    obj.name
);

// array
let myMotorCycle = ["Honda", "Suzuki", "Yamaha"];
myMotorCycle[0];
myMotorCycle[1];
myMotorCycle[2];
// for (i = 0; i < myMotorCycle.length; i++) {
// console.log(myMotorCycle[2]);
// }

for (let item of myMotorCycle) {
    console.log(item);
}

// menambahkan data di dalam array
myMotorCycle.push("kawasaki");
console.log(myMotorCycle);
myMotorCycle.pop("kawasaki");
console.log(myMotorCycle);
myMotorCycle.splice(0, 1);
console.log(myMotorCycle);

// iterasi
let school = ["smk", "stm", "man"];
school[0];
school[1];
school[2];
for (let name of school);
console.log(school);

// Map and set
let map = new Map();
map.set(1, "student");
console.log(map.get(1));
console.log(map.has(1));
console.log(map.has(2));
console.log(map.size)
console.log(map.clear());
console.log(map.clear(map));


// set
let varAndi = new Set();
let john = {
    class: "chemical"
};
let vikri = {
    class: "agribisnis"
};


varAndi.add(john);
varAndi.add(vikri);
varAndi.add(john);
console.log(varAndi.size);


let varSize = new Set(["big", "small", "medium"]);
for (let value of varSize);
console.log(varSize);

varSize.forEach((value, valueAgain, varSize) => {
    console.log(value);
});

varSize.keys(1);
console.log(varSize.keys(1));

// WeakMap dan WeakSet





// date and time
// new date 
let desember = new Date();
console.log(desember);
let jan10_1994 = new Date(0);
console.log(jan10_1994);
let jan11_1994 = new Date(24 * 3600 * 1000);
console.log(jan11_1994);