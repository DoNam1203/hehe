export default class Player{

        rightPressed = false;
        leftPressed = false;
        upPressed = false;
        downPressed = false;
        shootPressed = false;

    constructor(canvas,velocity,bulletController){
        this.canvas = canvas;
        this.velocity = velocity;
        this.bulletController = bulletController;

        this.x = this.canvas.width/2;
        this.y = this.canvas.height -75;
        this.width = 54;
        this.height = 96;
        this.image = new Image();
        this.image.src = "images/oggy.png";

        document.addEventListener("keydown",this.keydown);
        document.addEventListener("keyup",this.keyup);
    }

    draw(ctx){
        if(this.shootPressed){
           this.bulletController.shoot(this.x+this.width/3,this.y,4,10)
        }
        this.move();
        this.collideWithWalls();
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }

    collideWithWalls(){
        if(this.x < 0){
            this.x = 0 ;
        }
        if(this.x > this.canvas.width-this.width){
            this.x = this.canvas.width-this.width;
        }
        if(this.y > this.canvas.height-this.height){
            this.y = this.canvas.height-this.height;
        }
    }

    move(){
        if(this.rightPressed){
            this.x += this.velocity;
        }
        if(this.leftPressed){
            this.x -= this.velocity;
        }
        if(this.upPressed){
            this.y -= this.velocity;
        }
        if(this.downPressed){
            this.y += this.velocity;
        }
        
    }
    keydown = (e)=>{
        if(e.code === "KeyW" ){
            this.upPressed = true;
        }
        if(e.code === "KeyS"){
            this.downPressed = true;
        }
        if(e.code === "KeyA"){
            this.leftPressed = true;
        }
        if(e.code === "KeyD"){
            this.rightPressed = true;
        }
        if(e.code === "Space"){
            this.shootPressed = true;
        }
    }
    keyup = (e)=>{
        if(e.code === "KeyW" ){
            this.upPressed = false;
        }
        if(e.code === "KeyS"){
            this.downPressed = false;
        }
        if(e.code === "KeyA"){
            this.leftPressed = false;
        }
        if(e.code === "KeyD"){
            this.rightPressed = false;
        }
        if(e.code === "Space"){
            this.shootPressed = false;
        }
    }
    
}