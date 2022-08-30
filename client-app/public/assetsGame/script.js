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
 let displayScore=document.getElementById('score');
 let score=0;

function jump(){

    if(isJumping) return;
    upTime=setInterval(()=>{
        if(characterBottom > groundHeight + 300){
            clearInterval(upTime);
          downTime=setInterval(()=>{
            if(characterBottom <= groundHeight + 60){
                clearInterval(downTime);
                isJumping = false;

            }
            characterBottom -= 10;          //check here
            character.style.bottom=characterBottom + 'px';
          },20);

        }
    characterBottom += 10;
   character.style.bottom=characterBottom + 'px';
   isJumping=true;
}, 20);

}

// function showScore(){
//   score++;
//   displayScore.innerText=score;
// }



function generateObstacle(){

let obstacles=document.querySelector('.obstacles');
let obstacle=document.createElement('div');
obstacle.setAttribute('class','obstacle');
obstacles.appendChild(obstacle);
score++;
displayScore.innerText=score;



let randomTimeout=Math.floor(Math.random() * 1000)+1000;
let obstacleRight= -30;
let obstacleBottom=100;
let obstacleWidth=30;
let obstacleHeight=Math.floor(Math.random() *50) +50;
obstacle.style.backgroundColor=`rgb(${Math.floor(Math.random()*255)}, 
${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},  )`;


function test(){
  clearInterval(obstacleInterval);
clearTimeout(obstacleTimeout);
location.reload();
alert('Game over! Your Score is: '+score);

}

function moveObstacle(){
obstacleRight +=5;
obstacle.style.right=obstacleRight + 'px';
obstacle.style.bottom=obstacleBottom + 'px';
obstacle.style.width=obstacleWidth + 'px';
obstacle.style.height=obstacleHeight + 'px';

if(characterRight >=obstacleRight - characterWidth && characterRight <= 
  obstacleRight + obstacleWidth && characterBottom <= obstacleBottom + obstacleHeight){
    character.classList.add('characterBoom');
    
    // location.reload()
console.log("UPPSSSS");
// alert('Game over! Your Score is: '+score);
// clearInterval(obstacleInterval);
// clearTimeout(obstacleTimeout);
// location.reload();

  setTimeout(test,1000); 
  
 }


 

var container=document.getElementById("containerId");
container.style.display='none';
 
}

let obstacleInterval=setInterval(moveObstacle,20);
let obstacleTimeout=setTimeout(generateObstacle, randomTimeout);}
// setInterval(showScore,1000);      // score counter
// score++;
// displayScore.innerText=score;


document.getElementById("play-button").addEventListener("click", generateObstacle);
//  generateObstacle();  

function control(e){
    if(e.key == 'ArrowUp' || e.key == ' '){
     jump();

    }

}

document.addEventListener('keydown', control);

function setColortoCharacter() {
  var x = document.getElementById("myColor").value;
document.getElementById('character').style.background=x;

}


//under constraction

// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
