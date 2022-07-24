console.log("web multimedia");

let character=document.getElementById('character');
let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));

let characterRight = parseInt(window.getComputedStyle(character).getPropertyValue("right"));
let characterWidth = parseInt(window.getComputedStyle(character).getPropertyValue("width"));

let ground=document.getElementById('ground');
let groundBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
let groundHeight = parseInt(window.getComputedStyle(character).getPropertyValue("height"));

 let isJumping=false;
 let upTime;
 let downTime;

function jump(){

    if(isJumping) return;
    upTime=setInterval(()=>{
        if(characterBottom > groundHeight + 250){
            clearInterval(upTime);
          downTime=setInterval(()=>{
            if(characterBottom <= groundHeight + 10){
                clearInterval(downTime);
                isJumping = false;

            }
            characterBottom -= 10;
            character.style.bottom=characterBottom + 'px';
          },20);

        }
    characterBottom += 10;
   character.style.bottom=characterBottom + 'px';
   isJumping=true;
}, 20);

}

function generateObstacle(){
let obstacles=document.querySelector('.obstacles');
let obstacle=document.createElement('div');
obstacle.setAttribute('class','obstacle');
obstacles.appendChild(obstacle);

let obstacleRight= -30;
let obstacleBottom=100;
let obstacleWidth=30;
let obstaceHeight=Math.floor(Math.random() *50) +50;

function moveObstacle(){
obstacleRight +=5;
obstacle.style.right=obstacleRight + 'px';
obstacle.style.bottom=obstacleBottom + 'px';
obstacle.style.width=obstacleWidth + 'px';
obstacle.style.height=obstaceHeight + 'px';

}

let obstacleInterval=setInterval(moveObstacle,20);
let obstacleTimeout=setTimeout(generateObstacle, 1000);

}

generateObstacle();

function control(e){
    if(e.key == 'ArrowUp' || e.key == ' '){
     jump();

    }

}

document.addEventListener('keydown', control);