const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var bgSprite;
var bird, up, down;

function preload(){
    backgroundImg = loadImage("Spr/bg.png")
    b = loadImage("Spr/bird.png")
}

function setup(){
    var canvas = createCanvas(288,512)
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(10,10,306,118)

}

function draw(){
    Engine.update(engine);
    background(backgroundImg)
    ground.display();
    drawSprites();
}