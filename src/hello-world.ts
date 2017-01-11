const message = "Hello World!";

const sayHello = message => console.log(message);

sayHello(message);

function Person(name) {
    this.name = name;

    this.sayHi = function() {
        setTimeout(() => {
            console.log("Hello my name is ", this.name);
        })
    }
}

const person = new Person("Max");
person.sayHi();