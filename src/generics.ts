function cloneArray<T>(array: T[]): T[] {
    return array.slice(0);
}

interface HasName {
    name: string
}

const heroes: HasName[] = [
    {name: "Superman"},
    {name: "Batman"},
    {name: "Green Lantern"},
    {name: "Wonder Woman"},
    {name: "Flash"}
]

const heroesClones = cloneArray(heroes);

console.log("Heroes Clones", heroesClones);

const numbers = [1, 2, 3, 4, 5];

const numbersClones = cloneArray(numbers);

/** Generic Classes */
/////////////////////

class SuperCharacter {

    constructor(public name: string) { }

}

class Hero extends SuperCharacter {

}

class Villain extends SuperCharacter {
    constructor(name: string, public weapon: string) {
        super(name);
    }

    sayHi() {
        console.log("Hi from the Villain");
    }
}

class SuperTeam<T extends SuperCharacter> { //try extend Villain in T
    constructor(public members: T[], public leader: T) { }
}

const captainAmerica = new Hero("Captain America");
const thor = new Hero("Thor");
const ironMan = new Hero("Iron Man");
const avengers = new SuperTeam([captainAmerica, thor, ironMan], captainAmerica);
const avengersMembers = avengers.members;

const luthor = new Villain("Luthor", "Weapon 1");
const bizarro = new Villain("Bizarro", "Weapon 2");
const captainCold = new Villain("Captain Cold", "Weapon 3");
const legionOfDoom = new SuperTeam([luthor, bizarro, captainCold], luthor);

const megaCrossoverTeam = new SuperTeam([captainAmerica, thor, ironMan, luthor, bizarro, captainCold], captainAmerica);
