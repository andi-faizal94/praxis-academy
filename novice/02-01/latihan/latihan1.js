// 1. Constructor Functions

function murid(name, classes) {
    this.name = name;
    this.classes = classes;
    this.getName = function() {
        return this.name + " " + this.class;
    }
}
murid();
let murid1 = new murid('andi', '2A');
let murid2 = new murid('fandi', '3A');
murid2;


// 2.prototype

function player(acuration, position) {
    this.acuration = acuration;
    this.position = position;
    this.getName = function() {
        return this.acuration + " " + this.position;
    }
}
player();
let player1 = new player('80', 'dm');
let player2 = new player('40', 'am');
player2;
console.log(player2);
player.prototype.year = "2014";



// Class 
class academyFootball {
    constructor(name, position, health) {
        this.name = name;
        this.position = position;
        this.health = health;
    }
    getName() {
        return "player" + this.name + this.position + this.health;
    }
}
academyFootball;
console.log(academyFootball);
let academyFootball1 = new academyFootball("andi", "dm", "very health");
academyFootball1;
console.log(academyFootball1);

// 4. Class Features

// static method
class alat {
    constructor(name, model, used) {
        this.name = name;
        this.model = model;
        this.used = used;
    }
    getName() {
        return this.name + " " + this.model;
    }
    static getColor(v) {
        return v.used;
    }
}

let thing = new alat('obeng', 'pluss', 'membuka');
alat.getColor(thing);


// get dan set
class Thing {
    constructor(name) {
        this.name = "name";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

// subclassing 

class Bola {
    constructor(pemain, posisi, nomorPunggung) {
        this.pemain = pemain;
        this.posisi = posisi;
        this.nomorPunggung = nomorPunggung;
    }
    getName() {
        return "ini" + " " + this.pemain + " " + this.posisi;
    }
}

class Inti extends Bola {
    getName() {
        return "ini" + " " + this.pemain + " " + "in Arsenal";
    }
}

let pemainA = new Bola('andi', "am", "10", );
pemainA.getName();
// console.log(pemainA.getName());



// constructor()
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}
let user = new User("andi");
user.sayHi();

// class exprexion
let Thingss = class myThing {
    sayHi() {
        console.log(myThing);
    }
};
new Thingss().sayHi();