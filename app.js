//game constants and variables
let direction ={x:0, y:0}//intital direction of snake is 0
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {X: 13, Y: 15}//snake is an aray 
]
food = {X: 6, Y: 7};//food is not an array 

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
    //display snake 
    board.innerHTML ="";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.Y;
        snakeElement.style.gridColumnStart = e.X;
        snakeElement.classList.add('snake')
        if(index == 0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    });
    //display food 
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.Y;
    foodElement.style.gridColumnStart = food.X;
    foodElement.classList.add('food')
    
    board.appendChild(foodElement);
}










//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    snakeVelocity = {X:0, Y:1}//start the game 
    moveSound.play();
    switch (e.key) {
            case 'ArrowUp':
                snakeVelocity.X=0;
                snakeVelocity.Y=-1;
                console.log('ArrowUp');
                break;
            case 'ArrowDown':
                snakeVelocity.X=0;
                snakeVelocity.Y=1;
                console.log('ArrowDown');
                break;
            case 'ArrowLeft':
                snakeVelocity.X=-1;
                snakeVelocity.Y=0;
                console.log('ArrowLeft');
                break;
            case 'ArrowRight':
                snakeVelocity.X=1;
                snakeVelocity.Y=0;
                console.log('ArrowRight');
                break;
    
        default:
            break;
    }
})