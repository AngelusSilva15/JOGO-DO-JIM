var paradoImg
var atacandoImg
var mortoImg
var danoImg

function preload(){
  paradoImg = loadImage("assets/parado.png")
  atacandoImg = loadImage("assets/atacando.png")
  mortoImg = loadImage("assets/morto.png")
  danoImg = loadImage("assets/parado.png")
  zumbi = loadImage("assets/zombie.png")
  espada1 = loadImage("assets/espada.png")
  fundo1 = loadImage("assets/fundo.jpg")
  zumbi2 = loadImage("assets/zombie2.png")
  zumbi3 = loadImage("assets/zombie3.png")
  lança1 = loadImage("assets/lanca.png")
  escudo1 = loadImage("assets/escudo.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  jim = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
  jim.addImage("parado",paradoImg)
  jim.scale = 0.3
   grupoespadas = createGroup()
   grupoescudo = createGroup()
   grupolanças = createGroup()

   grupozumbie = createGroup()
   grupozumbie2 = createGroup()
   grupozumbie3 = createGroup()
}

function draw() {
  background(fundo1); 
zumbis()
zumbis2()
zumbis3()
if(keyIsDown(RIGHT_ARROW)){
  espada()
}
if(keyIsDown(UP_ARROW)){
  lança()
}
if(keyIsDown(LEFT_ARROW)){
  escudo()
}
if(grupoespadas.isTouching(grupozumbie)){
grupozumbie.destroyEach()
}
if(grupoescudo.isTouching(grupozumbie2)){
  grupozumbie2.destroyEach()
}
if(grupolanças.isTouching(grupozumbie3)){
  grupozumbie3.destroyEach()
}
drawSprites();

}
function espada(){
  espadas = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
  espadas.addImage(espada1)
  espadas.scale = 0.3
  espadas.velocityX = +15
  grupoespadas.add(espadas)
  }
  function escudo(){
    escudos = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
    escudos.addImage(escudo1)
    escudos.scale = 0.3
    escudos.velocityX = -15
    grupoescudo.add(escudos)
  }
 function lança(){
  lanças = createSprite(displayWidth/2+100, displayHeight-100, 50, 50);
  lanças.addImage(lança1)
  lanças.scale = 0.3
  lanças.velocityY = -15
  grupolanças.add(lanças)
 }

function zumbis (){
  if (frameCount%50===0){
    zumbie = createSprite(displayWidth, displayHeight-100, 50, 50)
  zumbie.addImage(zumbi)
  zumbie.scale = 0.2
  zumbie.velocityX = -15
  grupozumbie.add(zumbie)
}
}
function zumbis2 (){
  if (frameCount%100===0){
    zumbie2 = createSprite( 0, displayHeight-100, 50, 50)
  zumbie2.addImage(zumbi2)
  zumbie2.scale = 0.6
  zumbie2.velocityX = +15
  grupozumbie2.add(zumbie2)
}
}
function zumbis3 (){
  if (frameCount%150===0){
    zumbie3 = createSprite(displayWidth/2+100, 0, 50, 50)
  zumbie3.addImage(zumbi3)
  zumbie3.scale = 0.2
  zumbie3.velocityY = +15
  grupozumbie3.add(zumbie3)
}


}
