let topPosition = 0;
let leftPosition = 0;
let moveDistance = 1;
let level = 1;
let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39,
    space: 32
}

let smallSquare = document.getElementById('small-square');
let bigSquare = document.getElementsByClassName('square')[0];

let smallSquareWidth = smallSquare.offsetWidth;
let bigSquareWidth = bigSquare.offsetWidth;

let speed = 150;
let interval;

document.addEventListener('keyup', function (event) {
    moveSquare(event.keyCode);
})

function moveSquare(keyCode) {
    if (keyCode == keys.arrowUp) {
        clearInterval(interval);
        interval = setInterval(moveTop, speed);
    } else if (keyCode == keys.arrowDown) {
        clearInterval(interval);
        interval = setInterval(moveDown, speed);
    } else if (keyCode == keys.arrowLeft) {
        clearInterval(interval);
        interval = setInterval(moveLeft, speed);
    } else if (keyCode == keys.arrowRight) {
        clearInterval(interval);
        interval = setInterval(moveRight, speed);
    } else if (keyCode == keys.space) {
        clearInterval(interval)
    }
}

function moveLeft() {
    if (leftPosition > 0) {

        if ((leftPosition - moveDistance) > 0) {
            leftPosition = leftPosition - moveDistance;
        } else {
            leftPosition = 0;
        }
    } else {
        if (topPosition == 0) {
            clearInterval(interval);
            interval = setInterval(moveDown, speed);
        } else if (topPosition == bigSquareWidth - smallSquareWidth) {
            clearInterval(interval);
            interval = setInterval(moveTop, speed);
        } else {
            if (topPosition >= Math.floor(bigSquareWidth / 2)) {
                clearInterval(interval);
                interval = setInterval(moveDown, speed);
            } else {
                clearInterval(interval);
                interval = setInterval(moveTop, speed);
            }
        }
    }

    drawSquare();
}

function moveRight() {

    if (leftPosition < (bigSquareWidth - smallSquareWidth)) {
        if ((leftPosition + moveDistance) < (bigSquareWidth - smallSquareWidth)) {
            leftPosition = leftPosition + moveDistance;
        } else {
            leftPosition = bigSquareWidth - smallSquareWidth;
        }

    }
    else {
        if (topPosition == 0) {
            clearInterval(interval);
            interval = setInterval(moveDown, speed);
        } else if (topPosition == bigSquareWidth - smallSquareWidth) {
            clearInterval(interval);
            interval = setInterval(moveTop, speed);
        } else {
            if (topPosition >= Math.floor(bigSquareWidth / 2)) {
                clearInterval(interval);
                interval = setInterval(moveDown, speed);
            } else {
                clearInterval(interval);
                interval = setInterval(moveTop, speed);
            }
        }
    }


    drawSquare();
}

function moveDown() {
    if (topPosition < (bigSquareWidth - smallSquareWidth)) {
        if ((topPosition + moveDistance) < (bigSquareWidth - smallSquareWidth)) {
            topPosition = topPosition + moveDistance;
        } else {
            topPosition = bigSquareWidth - smallSquareWidth;
        }
    } else {
        if (leftPosition == 0) {
            clearInterval(interval);
            interval = setInterval(moveRight, speed);
        } else if (leftPosition == bigSquareWidth - smallSquareWidth) {
            clearInterval(interval);
            interval = setInterval(moveLeft, speed);
        } else {
            if (leftPosition >= Math.floor(bigSquareWidth / 2)) {
                clearInterval(interval);
                interval = setInterval(moveRight, speed);
            } else {
                clearInterval(interval);
                interval = setInterval(moveLeft, speed);
            }
        }
    }
    drawSquare();
}

function moveTop() {
    if (topPosition > 0) {
        if (topPosition - moveDistance > 0) {
            topPosition = topPosition - moveDistance;
        } else {
            topPosition = 0;
        }
    } else {
        if (leftPosition == 0) {
            clearInterval(interval);
            interval = setInterval(moveRight, speed);
        } else if (leftPosition == bigSquareWidth - smallSquareWidth) {
            clearInterval(interval);
            interval = setInterval(moveLeft, speed);
        } else {
            if (leftPosition >= Math.floor(bigSquareWidth / 2)) {
                clearInterval(interval);
                interval = setInterval(moveRight, speed);
            } else {
                clearInterval(interval);
                interval = setInterval(moveLeft, speed);
            }
        }
    }
    drawSquare();
}

function drawSquare() {
    upLevel();
    smallSquare.style.top = topPosition + 'px';
    smallSquare.style.left = leftPosition + 'px';
}

function upLevel() {

    if ((
        topPosition ==
        (Math.floor(bigSquareWidth / 2) -
            Math.floor(smallSquareWidth) / 2)) && (
            leftPosition ==
            (Math.floor(bigSquareWidth / 2) -
                Math.floor(smallSquareWidth) / 2))) {
        speed = speed - 50;
        level++;
        document.getElementById('level').innerHTML = level;
    }
}