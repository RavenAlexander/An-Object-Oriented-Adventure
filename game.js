//Part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
        }
}
console.log(adventurer);


const flea = {
    name: "Frank",
    type: "flea",
    belongings: ["small hat", "sunglasses"]
}

adventurer.companion.companion = flea;
console.log(adventurer);

adventurer.roll();

//Part 2
class Character {
  static MAX_HEALTH = 100; //Part 4
    constructor (name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  }

  const robin = new Character("Robin");
  robin.inventory = ["sword", "potion", "artifact"];
  robin.companion = new Character("Leo");
  robin.companion.type = "Cat";
  robin.companion.companion = new Character("Frank");
  robin.companion.companion.type = "Flea";
  robin.companion.companion.inventory = ["small hat", "sunglasses"];

  //Part 3
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor (name, role) {
      super(name);
        if (!Adventurer.ROLES.includes(role)) {
          throw new Error("Invalid role for Adventurer");
        }

      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;

    }
  }

  //const Robin = new Adventurer("Robin", "Jester"); //This is a test for line 53
  //console.log(Robin);

  const Leo = new Companion("Leo", "cat");
  console.log(Leo);

  const Frank = new Companion("Frank", "flea");
  Frank.inventory.push("small hat", "sunglasses");
  console.log(Frank);

  //Part 5

  class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find(a => a.name === name);
    }
}

const healers = new AdventurerFactory("Healer");
const robin2 = healers.generate("Robin");
console.log(robin2); 
