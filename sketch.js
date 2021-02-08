var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(500,400,50,20);
    surface1.shapeColor("orange");
    surface2=createSprite(200,100,50,20);
    surface2.shapeColor("green");
    surface3=createSprite(50,500,50,20);
    surface3.shapeColor("blue");
    surface4=createSprite(50,200,50,20);
    surface4.shapeColor("pink");



    //create box sprite and give velocity
    box=createSprite(500,220,20,20);
    box.velocityX=2;
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
     music.playSound();
    }
    if(surface2.isTouching(box)){
       ball.shapeColour=rbg(255,128,0)
       ball.velocityX=0;
       music.stop();
     music.playSound();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
     music.playSound();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
     music.playSound();
    }
}
