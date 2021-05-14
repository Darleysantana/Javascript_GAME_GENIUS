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

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(var i in order){
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, Number(i) + 1); 
    }
}

let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}