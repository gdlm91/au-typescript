// 0-Guard, 1-Forward, 2-Center

//For not nullable option, check tsconfig.json

enum PlayerPosition {
    Guard, 
    Forward,
    Center
}

interface Player {
    name:string; 
    position:PlayerPosition
};

let kobe: Player | null = { // Multiple valid Types
    name: "Kobe", 
    position: PlayerPosition.Guard
};

kobe = null;

kobe = undefined;