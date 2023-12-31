var girl
var girlImage
var floor
var floorImage

function preload() {

girlImage = loadImage ("pic1.png")
floorImage = loadImage ("floor2.jpeg")
}
function setup() {
  createCanvas(1600,700);
  girl= createSprite(800, 400, 50, 50);
  girl.addImage("girl",girlImage)
  
}

function draw() {
  background(floorImage);  
  if (keyDown("left")){
girl.x = girl.x-3
 }
 if (keyDown("right")){
  girl.x = girl.x+3
   }
   if (keyDown("down")){
    girl.y = girl.y+3
     }
     if (keyDown("up")){
      girl.y = girl.y-3
       }
       console.log (girl.y)
  drawSprites();

}