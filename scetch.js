let x = 80;
let y = 80;
let sX = 10;
let sY = 10;


function setup() {
    background(0);
    size(100,100);


}
function draw() {



    x += sX;
    y += sY;

    ellipse(x, y,80,80);


}