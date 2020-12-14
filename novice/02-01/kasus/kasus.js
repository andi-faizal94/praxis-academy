function cat(tiredness, hunger, lonliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
    this.feed = function() {
        return this.hunger--;
    }


    this.sleep = function() {
        return this.tiredness++;
    }

    this.walk = function() {
        return this.happiness++;
    }

    this.dead = function() {
        return this.lonliness++;
    }

    if (this.hunger) {
        console.log('pows realy hungry');
    } else {
        console.log('pow enough')
    };
    if (this.walk) {
        console.log('paw very happy');
    }


    // this.getName = function() {
    //     return "cat is" + " " + this.tiredness + " " + this.hunger + " " + this.lonliness + " " + this.happiness;
}

let cat1 = new cat(1, 1, 1, 1);
cat1.feed();
cat1.dead();
cat1.walk();
cat1.sleep();