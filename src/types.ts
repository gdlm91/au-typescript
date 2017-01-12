type MessageCreator = (name:string) => string;

function createHelloMessage(name) {
    return `Hello, my name is ${name}`;
}

const creator: MessageCreator = createHelloMessage;

console.log(creator('Bill'));