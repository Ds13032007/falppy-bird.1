class Ground 
{
    constructor(x,y,width,height)
    {
    var opt={
    isStatic:true 
    }
    this.body = Bodies.rectangle(x,y,width,height,opt);
    this.img = loadImage("Spr/ground.png")
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    
    }
    display()
    {
        
        imageMode(CENTER)
        image(this.img,155,500,this.width,this.height);
    }

}