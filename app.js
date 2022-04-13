//game constants and variables
let inputDir ={x:0, y:0}//intital direction of snake is 0
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}//snake is an aray 
]
food = {x: 6, y: 7};//food is not an array 

//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}
//collide function 
function isCollide(snake){
    //if snake bump into itself
    for (let i = 1; i < snakeArr.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    //if collided with the border
    if(snake[0].x>= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <= 0){
            return true;
        }     
        return false;  
}

function gameEngine(){
    //part1 : updating the sanke array and food 
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x:0, y:0};
        alert('Game Over! Press any key to play again');
        snakeArr[{x: 13, y: 15}];
        musicSound.play();
        score = 0;
    }
    //if u have eaten the food then increament the score n regerate the food 
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score += 1;
        if(score>hiscoreval){
            hiscoreval  = score;
            localStorage.setItem('hiscore',JSON.stringify(hiscoreval))
            hiscoreBox.innerHTML = 'HiScore: ' +hiscoreval;
        }
        scoreBox.innerHTML = "Score: "+score
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }
    //moving the snake 
    for(let i = snakeArr.length-2;i>=0;i--){
        snakeArr[i+1] = {...snakeArr[i]};//so to neglect the refrence problem 
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //part2: display the snake and food 
    //display snake 
    board.innerHTML ="";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;       
        if(index === 0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake')
        }
        board.appendChild(snakeElement);
    });
    //display food 
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    
    board.appendChild(foodElement);
}
//main logic starts here
musicSound.play()
let hiscore = localStorage.getItem('hiscore');
if(hiscore === null){
    let hiscoreval = 0;
    localStorage.setItem('hiscore',JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore)
    hiscoreBox.innerHTML = 'HiScore: ' +hiscore
}
window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {X:0, Y:1}//start the game 
    moveSound.play();
    switch (e.key) {
            case 'ArrowUp':
                inputDir.x=0;
                inputDir.y=-1;
                console.log('ArrowUp');
                break;
            case 'ArrowDown':
                inputDir.x=0;
                inputDir.y=1;
                console.log('ArrowDown');
                break;
            case 'ArrowLeft':
                inputDir.x=-1;
                inputDir.y=0;
                console.log('ArrowLeft');
                break;
            case 'ArrowRight':
                inputDir.x=1;
                inputDir.y=0;
                console.log('ArrowRight');
                break;
    
        default:
            break;
    }
})