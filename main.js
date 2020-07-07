console.log("bubbles online");

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const canvWidth = 200;
const canvHeight = 200;

let centerX = 100;
let centerY = 100;
let newCenterX;
let newCenterY;
let vertCathetus;
let horizCathetus;
let radius = 40;
let hypotenuse;


// ctx.beginPath();
// ctx.arc(50,50,50,0,2*Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150,50,50,0,2*Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(50,150,50,0,2*Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(150,150,50,0,2*Math.PI);
// ctx.stroke();

ctx.beginPath();
ctx.arc(centerX,centerY,radius,0,2*Math.PI);
ctx.stroke();

myCanvas.addEventListener('mousemove', e => {
    x = e.offsetX;
    y = e.offsetY;

    ctx.clearRect(0, 0, 200, 200);

    vertCathetus = centerY - y;
    horizCathetus = centerX - x;

    hypotenuse = Math.floor(Math.sqrt(vertCathetus * vertCathetus + horizCathetus * horizCathetus));
    //move bubble
    if (hypotenuse < radius + 10) {
      // // if mouse outside
      // if (hypotenuse > radius) {
      //   if (x < centerX) {
      //     newCenterX = centerX + (radius - Math.abs(horizCathetus));
      //   } else {
      //     newCenterX = centerX - (radius - Math.abs(horizCathetus));
      //   }
  
      //   if (y < centerY) {
      //     newCenterY = centerY + (radius - Math.abs(vertCathetus));
      //   } else {
      //     newCenterY = centerY - (radius - Math.abs(vertCathetus));
      //   }
      // // else if mouse inside bubble
      // } else {
          newCenterX = centerX + horizCathetus;
          newCenterY = centerY + vertCathetus;
      // }
     
    } else {
      newCenterX = centerX;
      newCenterY = centerY;
    }

    ctx.beginPath();
    ctx.arc(newCenterX,newCenterY,radius,0,2*Math.PI);
    ctx.stroke(); 




    console.log("x: " + x + " y: " + y);
    console.log("hyp: " + hypotenuse);
    console.log("newX: " + newCenterX + " newY: " + newCenterY);
    console.log("horCat: " + horizCathetus + " vertCat: " + vertCathetus);

});