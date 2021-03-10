const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  engine = Engine.create();
  world = engine.world;
}

function setup(){
  var canvas = createCanvas(400,700);    
  drop = new Drop(100,1000);
}

function draw(){
   background(0);

   var maxDrops = 100;
        for(var i=0; i<maxDrops; i++){
            drop.push(new createDrop(random(0,400),random(0,400)))
        }

}   

