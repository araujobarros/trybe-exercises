let peca;
peca = "Rainha";
let pecaNoCaseSens = peca.toLowerCase();
switch (pecaNoCaseSens) {
    case "peão":
        console.log("O peão move-se de formas distintas quer se esteja a mover ou a capturar uma peça. Quando um peão se move avança uma casa na vertical em direcção ao lado do adversário. Se ele ocupar a sua casa inicial pode avançar uma ou duas casas. Para capturar o peão move-se uma casa na diagonal.");
        break
    case "cavalo":
        console.log("O Cavalo movimenta-se em forma de L, e é a única peça que pode \"saltar\" por cima de outras.");
        break
    case "torre":
        console.log("A Torre pode movimentar-se um qualquer número de casas na horizontal ou vertical.");
        break
    case "bispo":
        console.log("O Bispo pode movimentar-se um qualquer número de casas em qualquer uma das diagonais.");
        break
    case "dama":
    case "rainha":
        console.log("A Dama pode movimentar-se um qualquer número de casas na horizontal, vertical ou qualquer em uma das diagonais.");
        break
    case "rei":
        console.log("O Rei pode mover-se uma casa na horizontal, vertical ou diagonal.");
        break            
    default:
        console.log("Peça inexistente");

}