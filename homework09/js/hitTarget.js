'use strict';
let y = 0;
let x = 0;

do {
    x = prompt('Type x: ', '');
    x = parseInt(x);
    x = 10*x;
    if (isNaN(x)) {
        alert('Я не знаю таких чисел');
    } else {
        y = prompt('Type y: ', '');
        y = parseInt(y);
        y = 10*y;
        if (isNaN(y)) {
            alert('Я не знаю таких чисел');
        }
    }
} while (isNaN(x) || isNaN(y));

if (x * x + y * y <= 10000 ||
    -x - y - 200 <= 0 && x <= 0 && y <= 0) {
    console.log('HIT');
}
else {
    console.log('MISS');
}

var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
example.height = 1000;
example.width  = 1000;
ctx.beginPath();
ctx.moveTo(500,500);
ctx.arc(500, 500, 100, 0, 360);
ctx.moveTo(500,700);
ctx.lineTo(300, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 700);
ctx.fillStyle = '#b8b8b8';
ctx.fill();
ctx.moveTo(0, 500);
ctx.lineTo(1000, 500);
ctx.moveTo(500,1000);
ctx.lineTo(500,0);
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.moveTo(x+501,500-y);
ctx.arc(500+x, 500-y, 1, 0, 360);
ctx.stroke();


