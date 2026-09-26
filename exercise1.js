const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

// clear
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function clearScreen(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getPixel(x, y) {
  const [r, g, b] = ctx.getImageData(x, y, 1, 1).data;
  // match against the only colors drawPixel can produce, default to white
  if (r === 255 && g === 0 && b === 0) return "red";
  if (r === 0 && g === 128 && b === 0) return "green";
  if (r === 0 && g === 0 && b === 255) return "blue";
  return "black";
}

function checkPixel(x, y, expected, label) {
  let actual = getPixel(x, y)
  if (actual !== expected) console.error(`FAIL: ${label} -> expected "${expected}", got "${actual}"`);
}

function drawPixel(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

function drawHorizontalLine(x, y, color) {
    drawPixel(x, y, color);
    drawPixel(x+1, y, color);
    drawPixel(x+2, y, color);
    drawPixel(x+3, y, color);
    drawPixel(x+4, y, color);
    drawPixel(x+5, y, color);
    drawPixel(x+6, y, color);
    
}

function drawVerticalLine(x, y, color) {
  drawPixel(x, y, color);
  drawPixel(x, y+1, color);
  drawPixel(x, y+2, color);
  drawPixel(x, y+3, color);
  drawPixel(x, y+4, color);
  drawPixel(x, y+5, color);
  drawPixel(x, y+6, color);

}

function drawCircle(x, y, radius, color) {
  for (let i = 0; i < 360; i++) {
    let angle = i * (Math.PI / 180);
    let xPos = Math.round(x + radius * Math.cos(angle));
    let yPos = Math.round(y + radius * Math.sin(angle));
    drawPixel(xPos, yPos, color);
  }
}

function drawLongLine(x, y, color) {
    drawPixel(x, y, color);
    drawPixel(x+1, y, color);
    drawPixel(x+2, y, color);
    drawPixel(x+3, y, color);
    drawPixel(x+4, y, color);
    drawPixel(x+5, y, color);
    drawPixel(x+6, y, color);
    drawPixel(x+7, y, color);
    drawPixel(x+8, y, color);
    drawPixel(x+9, y, color);
    drawPixel(x+10, y, color);
    drawPixel(x+11, y, color);
    drawPixel(x+12, y, color);
    drawPixel(x+13, y, color);
    drawPixel(x+14, y, color);
    drawPixel(x+15, y, color);
    drawPixel(x+16, y, color);
    drawPixel(x+17, y, color);

}

function drawLongVerticalLine(x, y, color) {
  drawPixel(x, y, color);
  drawPixel(x, y+1, color);
  drawPixel(x, y+2, color);
  drawPixel(x, y+3, color);
  drawPixel(x, y+4, color);
  drawPixel(x, y+5, color);
  drawPixel(x, y+6, color);
  drawPixel(x, y+7, color);
  drawPixel(x, y+8, color);
  drawPixel(x, y+9, color);
  drawPixel(x, y+10, color);
  drawPixel(x, y+11, color);
  drawPixel(x, y+12, color);
  drawPixel(x, y+13, color);
  drawPixel(x, y+14, color);
  drawPixel(x, y+15, color);
  drawPixel(x, y+16, color);
  drawPixel(x, y+17, color);

}


clearScreen("black");

// test code 
drawPixel(0,0,"red")
drawPixel(50,50,"green")
drawPixel(99,99,"blue")

checkPixel(0,0, "red", "checkPixel(0,0)")
checkPixel(1,1, "black", "checkPixel(1,1)")

// reset
clearScreen("black");
