class Dustbin{
    constructor(x,y){
        var options = {
            isStatic:true
    
        }
		this.x = x
		this.y = y
		this.width = 100;
		this.height = 200;
		this.wall = 20;
		this.image = loadImage('dustbingreen.png');
		
    
	this.DustbinLeftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.wall,this.height,options);
 	World.add(world, this.DustbinLeftBody);

 	

 	this.DustbinBottomBody = Bodies.rectangle(this.x,this.y,this.width,this.wall,options);
 	World.add(world, this.DustbinBottomBody);

 	

 	this.DustbinRightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wall,this.height,options);
 	World.add(world, this.DustbinRightBody);

	 
        
    }

display(){
	var pos = this.DustbinRightBody.position;
	push();
	translate(pos.x,pos.y);
	rectMode(CENTER);
	pop();

	var pos1 = this.DustbinLeftBody.position;
	push();
	translate(pos1.x,pos1.y);
	rectMode(CENTER);
	pop();

	var pos2 = this.DustbinBottomBody.position;
	push();
	translate(pos2.x,pos2.y);
	imageMode(CENTER);
	image(this.image,0,-this.height/2,this.width,this.height);
	pop();



}
}
    