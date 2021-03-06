var canvas = document.getElementById('paint');
var ctx = canvas.getContext('2d');
 
var sketch = document.getElementById('sketch');
var sketch_style = getComputedStyle(sketch);
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var mouse = {x: 0, y: 0};
 
/* Mouse Capturing Work */
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.getBoundingClientRect().left - window.pageXOffset;
  mouse.y = e.pageY - this.getBoundingClientRect().top - window.pageYOffset;
}, false);

/* Drawing on Paint App */
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '4';

ctx.strokeStyle = "#56b4e911";
function getColor(colour){
  ctx.strokeStyle = colour;
  ctx.lineWidth = '4';
}
function getSize(size){ctx.lineWidth = size;}          

canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

/* Clearing canvas */
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
}