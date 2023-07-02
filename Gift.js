export default class Gift {
    constructor(canvas,velocity) {
        this.canvas = canvas;
        this.velocity = velocity;

        this.x = this.canvas.width/2;
        this.y = this.canvas.height/2;
        this.width = 70;
        this.height = 70;
        this.image = new Image();
        this.image.src = 'images/gift.png';

        

    }

    draw(ctx){
        ctx.drawImage(this.image,this.x-this.width/2,this.y+this.height/2,this.width,this.height);
    }

    
}