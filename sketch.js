var issImg,iss
var spacebgImg
var spaceCraft1Img, spaceCraft

var spaceCraft2Img
var spaceCraft3Img
var spaceCraft4Img
var hasDocked = false
function preload(){
issImg = loadImage("iss.png")
spacebgImg = loadImage("spacebg.jpg")
spaceCraft1Img = loadImage("spacecraft1.png")
spaceCraft2Img = loadImage("spacecraft2.png")
spaceCraft3Img = loadImage("spacecraft3.png")
spaceCraft4Img = loadImage("spacecraft4.png")
}

function setup(){
  createCanvas(600,350)
spaceCraft=createSprite(285,240)
spaceCraft.addImage(spaceCraft1Img)
spaceCraft.scale = 0.15
iss = createSprite(330,130)
iss.addImage(issImg)
iss.scale = 0.25
}

function draw(){
background(spacebgImg)
spaceCraft.addImage(spaceCraft1Img)
if(!hasDocked){
spaceCraft.x+= random(-1,1)
}

if(keyDown(UP_ARROW)){
spaceCraft.y-=2
}

if(keyDown(LEFT_ARROW)){
spaceCraft.addImage(spaceCraft3Img)
spaceCraft.x-=1
}

if(keyDown(RIGHT_ARROW)){
  spaceCraft.addImage(spaceCraft2Img)
  spaceCraft.x+=1
}

if(keyDown(DOWN_ARROW)){
spaceCraft.addImage(spaceCraft1Img)



}

if(spaceCraft.y <= (iss.y+70)&& spaceCraft.x <= (iss.x-10)){
hasDocked = true
textSize(25)
fill("white")
text("docking successful",200,300)
}
drawSprites()
}
