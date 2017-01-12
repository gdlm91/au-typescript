function buildMessage(message:string) :never {
    throw new Error("Message not available");
}

let message: never = buildMessage("Hello World");

let counter:number = message; //YEs

let str:string = "String"; //YES

let myAny:any = "Any";

message = str; //NO
message = myAny;

function voidFunction(message:string) :void {
    alert("Message not available");
}