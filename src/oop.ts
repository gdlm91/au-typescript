enum Editor {
    MARVEL,
    DC
}

interface CanFly {
    fly(message: string): void;
}

interface Hero {
    name: string;
}

abstract class SuperHero implements Hero {

    private static readonly LABEL = 'Super Hero:';

    constructor(
        public name: string,
        protected _editor: Editor,
        protected createYear: number
    ) { }

    abstract createMessage(): string;

    static sayHi(hero: SuperHero): string {
        return `${SuperHero.LABEL} ${hero.name} sais Hi!`;
    }
}

class FlyingHero extends SuperHero implements CanFly{    
    fly(message: string) {
        console.log(`${this.name} is Flying and said: ${message}`);
    }

    createMessage() {
        return `Super Hero: ${this.name} ${this.editor}, ${this.createYear}`;
    }

    get editor(): string {
        return Editor[this._editor];
    }

    set editor(editorName: string) {
        this._editor = (<any>Editor)[editorName];
    }
}

const superman = new FlyingHero("Superman", Editor.MARVEL, 1938);
superman.fly("Up and Away!");
superman.editor = "DC";
console.log(superman.createMessage());

const greenLantern = new FlyingHero("Green Lantern", Editor.DC, 1959);
console.log(greenLantern.createMessage());
console.log(SuperHero.sayHi(greenLantern));

const batman: Hero = {
    name: "Batman"
}