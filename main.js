// var rod = document.getElementsByClassName("rod");
var rod = document.querySelectorAll(".rod");
var ball = document.getElementById("ball");
// var box = document.getElementById("box");

var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;

// window.addEventListener('resize' , function(event){
//     innerWidth = window.innerWidth;

// })
var rodWidth = 150;
var rodHeight = 22;
var ballWidth = 20;
var ballSpeedX = 2;
var ballSpeedY = 2;
var score = 0;
function setValue(value) {
  return value + "px";
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 39) {
    let left = parseInt(rod[0].offsetLeft + "px");
    if (left < innerWidth - rodWidth - 5) {
      rod[0].style.left = setValue(left + 5);
      rod[1].style.left = setValue(left + 5);
    }
  }
  if (event.keyCode == 37) {
    let left = parseInt(rod[0].offsetLeft + "px");
    if (left > 5) {
      rod[0].style.left = setValue(left - 5);
      rod[1].style.left = setValue(left - 5);
    }
  }
});

document.addEventListener("keypress", function () {
  let ballRect = ball.getBoundingClientRect();
  let ballX = ballRect.x;
  let ballY = ballRect.y;
  // let rodRect = rod[0].getBoundingClientRect();
  // let rodX = rodRect.x;
  // let rodY = rodRect.y;

  var move = setInterval(function () {
    let rodX = rod[0].getBoundingClientRect().x;
    let rod2x = rod[1].getBoundingClientRect().x;
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;
    ball.style.top = setValue(ballY);
    ball.style.left = setValue(ballX);

    if (ballX + ballWidth > innerWidth || ballX < 0) {
      // clearInterval(move);
      ballSpeedX = -ballSpeedX;
    }
    let ballPos = ballX;
    if (ballY <= rodHeight) {
      ballSpeedY = -ballSpeedY;

      if (ballPos < rodX || ballPos > rodX + rodWidth) {
        // clearInterval(move);
      }
    } else if (ballY + ballWidth >= innerHeight - rodHeight) {
      ballSpeedY = -ballSpeedY;

      if (ballPos < rod2x || ballPos > rod2x + rodWidth) {
        // clearInterval(move);
      }
    }

    console.log("5");
  }, 10);
});
