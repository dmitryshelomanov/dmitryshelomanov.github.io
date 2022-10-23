export class Hero {
  constructor(age, nation, strength) {
    this.age = age;
    this.nation = nation;
    this.strength = strength;
  }

  getTotalStrength(season) {
    return (
      this.strength * (season === this.nation ? 1.5 : 1) + Math.PI * this.age
    );
  }
}
