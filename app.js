//game constants and variables
let direction ={x:0, y:0}//intital direction of snake is 0
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {X: 13, Y: 15 }
]


//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    //part1 : updating the sanke array and food 

    //part2: display the snake and food 
    board.innerHTML ="";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.Y;
        snakeElement.style.gridCloumnStart = e.X;
        snakeElement.classList.add('food')
        board.appendChild(snakeElement);

    })
}










//main logic starts here
window.requestAnimationFrame(main)