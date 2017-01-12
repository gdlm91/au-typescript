// 0-Guard, 1-Forward, 2-Center

enum PlayerPosition {
    Guard, 
    Forward,
    Center
}

type Player = [string, PlayerPosition];

let kobe: Player = ["Kobe", PlayerPosition.Guard];
let james: Player = ["James", PlayerPosition.Forward];
let shap: Player = ["Shap", PlayerPosition.Center];

let players: Player[] = [kobe, james, shap];

console.log(players);