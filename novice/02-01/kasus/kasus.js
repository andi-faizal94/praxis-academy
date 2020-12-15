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
    this.hungry = function(a) {

        if (this.hunger >= a) {
            return 'pows realy hungry';
        } else {
            return 'pow enough';
        }
    }

    this.walking = function(b) {
        if (this.walk >= b) {
            return 'paw very happy';
        } else {
            return 'paw is sad';
        }
    }

}
let cat1 = new cat(1, 1, 1, 1);
cat1.feed();
cat1.dead();
cat1.walk();
cat1.sleep();
// let cat2 = new cat(1, 1, 1, 1)
// cat1.hungry(6);
console.log(cat1.hungry(6));
console.log(cat1.walking(3));