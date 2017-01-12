// Interfaces to Define Properties for Objects
interface HasName {
    firstName: string,
    lastName: string
}
interface HasAddress {
    address: string
}

// Types for Aliases/Unions
type Player = (HasName & HasAddress) | null;

const player1: Player = {
    firstName: "Magic",
    lastName: "Johnson",
    address: "Staples"
}

const player2: Player = null;

let myVar: any;
let counter: number = 0;

function anyFunction(anyvar) { //Implicit Any Assing. (Go to tsconfig for configuration)

}

myVar = '';
myVar = 1;
myVar = [];
myVar = null;

counter = myVar; // Can assing any to other types!!!