// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  getRandomSoldier(soldier) {
    return Math.floor(Math.random() * soldier.length);
  }

  vikingAttack() {
    this.randomSaxon = this.getRandomSoldier(this.saxonArmy);
    this.randomViking = this.getRandomSoldier(this.vikingArmy);
    this.saxonArmy[this.randomSaxon].receiveDamage(
      this.vikingArmy[this.randomViking].strength
    );
    if (this.saxonArmy[this.randomSaxon].health <= 0) {
      this.saxonArmy.splice(this.randomSaxon, 1);
      return `A Saxon has died in combat`;
    }
    return `A Saxon has received ${
      this.vikingArmy[this.randomViking].strength
    } points of damage`;
  }

  saxonAttack() {
    this.randomSaxon = this.getRandomSoldier(this.saxonArmy);
    this.randomViking = this.getRandomSoldier(this.vikingArmy);
    this.name = this.vikingArmy[this.randomViking].name;
    this.vikingArmy[this.randomViking].receiveDamage(
      this.saxonArmy[this.randomSaxon].strength
    );
    if (this.vikingArmy[this.randomViking].health <= 0) {
      this.vikingArmy.splice(this.vikingArmy[this.randomViking], 1);
      return `${this.name} has died in act of combat`;
    }
    return `${this.name} has received ${
      this.saxonArmy[this.randomSaxon].strength
    } points of damage`;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    }
    if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    }
    return 'Vikings and Saxons are still in the thick of battle.';
  }
}
