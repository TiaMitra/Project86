canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var img_store="purple.jpeg";

    var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
img_store_Tag=new Image()  
img_store_Tag.src=img_store;

ctx.drawImage(img_store_Tag,0,0,canvas.width,canvas.height);
   
playSound();
}

function playSound()
{
    x.play();
}
