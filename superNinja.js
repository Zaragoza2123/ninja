class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }
    drinkSake() {
        this.health += 10;
        console.log('Health: ' + this.health)
    }
}
const ninja1 = new Ninja("Bonjii", 50)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log('Your biggest weakness may just be your biggest strength');
        super.drinkSake();
    }
}
const superSensei = new Sensei('Despa');
superSensei.speakWisdom();