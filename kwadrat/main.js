let topPosition = 0;
let leftPosition = 0;

let keys = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
}

let smallSquare = document.getElementById('small-square');

document.addEventListener('keyup', function (event) {
    moveSquare(event.keyCode);
})

function moveSquare(keyCode) {
    if (keyCode == keys.arrowUp) {
        if (topPosition > 0) {
            topPosition--;
        }
    } else if (keyCode == keys.arrowDown) {
        if (topPosition <= 540) {
            topPosition++;
        }
    } else if (keyCode == keys.arrowLeft) {
        if (leftPosition > 0) {
            leftPosition--;
        }
    } else if (keyCode == keys.arrowRight) {
        if (leftPosition <= 540) {
            leftPosition++;
        }
    }
    smallSquare.style.top = topPosition + 'px';
    smallSquare.style.left = leftPosition + 'px';
}