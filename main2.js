import Bubble from './Bubble.js'

console.log("main2 linked")

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const canvWidth = 400;
const canvHeight = 400;
const radius = 20;
const distance = 40;
let x, y;
const rows = 10;
const columns = 10;

//create 100 bubbles
let bubbles = [];
for (let i = 0; i < columns; i++) {
  bubbles[i] = [];
  for (let j = 0; j < rows; j++) {
    bubbles[i][j] = new Bubble(i * distance + radius, j * distance + radius, radius);
    //draw 100 bubbles
    ctx.beginPath();
    ctx.arc(bubbles[i][j].x,bubbles[i][j].y,radius,0,2*Math.PI);
    // ctx.stroke();
    ctx.fillStyle = "#4194f4";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }
}


myCanvas.addEventListener('mousemove', e => {
  x = e.offsetX;
  y = e.offsetY;

  //clear canvas
  ctx.clearRect(0, 0, canvWidth, canvHeight);

  //update each object
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let bubble = bubbles[i][j];
      bubble.horizCathetus = bubble.x - x;
      bubble.vertCathetus = bubble.y - y;
      bubble.hypotenuse = Math.floor(Math.sqrt(bubble.vertCathetus * bubble.vertCathetus + 
                          bubble.horizCathetus * bubble.horizCathetus));
      if (bubble.hypotenuse < radius + 20) {
        bubble.newX = bubble.x + bubble.horizCathetus;
        bubble.newY = bubble.y + bubble.vertCathetus;
      } else {
        bubble.newX = bubble.x;
        bubble.newY = bubble.y;
      }

      //draw each bubble

      ctx.beginPath();
      ctx.arc(bubble.newX,bubble.newY,radius,0,2*Math.PI);
      // ctx.stroke(); 
      ctx.fillStyle = "#41944";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "blue";
      ctx.stroke();
      
    }
  }

 

});
