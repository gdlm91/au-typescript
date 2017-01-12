console.log('Types');

let message:string = "Message";

let count:number = 3;

let messageRed:boolean =true;

type hasName = {
    firstName?:string, //Conditional
    lastName:string
}

type hasAddress = {
    streetName:string
}

type Person = {
    name: hasName,
    address: hasAddress
}

let person: hasName = {
    firstName: "Kobe",
    lastName: "Bryant"
}

person.address = ''; //Property not Defined error

let person2: hasName = {
    lastName: "Smith";
}

let person3: Person = {
    name: {
        lastName: "Miller"
    },
    address: {
        streetName: "Streen Name"
    }
}