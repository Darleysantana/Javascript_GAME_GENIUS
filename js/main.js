var order = [];
var clickedOrder = [];
var score = 0;

//0 = green
//1 = red
//2 = yellow
//3 = blue

const blue = document.querySelector('blue');
const red = document.querySelector('red');
const green = document.querySelector('green');
const yellow = document.querySelector('yellow');
//Ordem aleátoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(var i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1); 
    }
}
//Acende a proxima cor
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}
//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
        if(clickedOrder.length == order.length){
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
            nextLevel();
        }
    }
}
//função para o click do usuario
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê Perdeu o jogo!\nClick em Ok, para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];
    playGame();
}

//função do inicio de Jogo
let playGame = () => {
    alert('Bem vindo ao Gênius! Iniciando novo Jogo!');
    score = 0;
    nextLevel();
}

//evento onclick do jogo
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();