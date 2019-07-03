const windowWidth = 600;
const windowHeight = 600;
const speed = 3;

let s;

function setup() {

    createCanvas(windowWidth, windowHeight);

    s = new Snake();

}


function draw() {

    background(51);

    s.update();
    s.show();




}
function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
        s.dir(0,-speed);
    }
    else if(keyCode === DOWN_ARROW)
    {
        s.dir(0,speed);
    }
    else if (keyCode === LEFT_ARROW) {
        s.dir(-speed, 0);
    }
    else if(keyCode === RIGHT_ARROW)
    {
        s.dir(speed, 0);
    }
}


