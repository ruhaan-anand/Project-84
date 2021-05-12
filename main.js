var canvas = document.getElementById('myCanvas');
var pen = canvas.getContext("2d");

var car1X = 300, car1Y = 500, car1W = 70, car1H = 100
var car2X = 370, car2Y = 500, car2W = 120, car2H = 100

var background = new Image();
background.onload=setBackground;
background.src="car-racing-background.png"

var car1 = new Image();
car1.onload=setCar1;
car1.src="car1.png"

var car2 = new Image();
car2.onload=setCar2;
car2.src="car2.png"

function setCar1(){
    pen.drawImage(car1,car1X,car1Y,car1W,car1H)
}

function setCar2(){
    pen.drawImage(car2,car2X,car2Y,car2W,car2H)
}

function setBackground(){
    pen.drawImage(background,0,0,800,600)
}

setBackground();
setCar1();
setCar2();
window.addEventListener('keydown',keyDownEvent)

function keyDownEvent(event){
   if(event.keyCode==37){
       console.log("left");
       car1Left();
   }
   if(event.keyCode==38){
       console.log("up")
       car1Up();
   }
   if(event.keyCode==39){
       console.log("right")
       car1Right();
   }
   if(event.keyCode==40){
       console.log("down")
       car1Down();
   }
   if(event.keyCode==68){
       console.log("key d");
       car2Left();
   }
   if(event.keyCode==87){
       console.log("key w")
       car2Up();
   }
   if(event.keyCode==65){
       console.log("key a")
       car2Right();
   }
   if(event.keyCode==83){
       console.log("key s")
       car2Down();
   }
}