
function Snake() {
    this.x = 0;
    this.y = width /2;

    this.xspeed = speed;
    this.yspeed = 0;

    this.update = function () {

        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x >= (width - 10) || this.x <= 0)
        {
            this.xspeed = 0;
        }
        if(this.y >= (height -10) || this.y <= 0){
            this.yspeed = 0;
        }


    };

    this.show = function () {
        fill(255);
        rect(this.x,this.y,10,10);
    }

    this.dir= function(x,y)
    {
        this.xspeed = x;
        this.yspeed = y;
    }

}