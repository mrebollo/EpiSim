// Main canvas for drawing
var canvas;

// Best guess at typical scroll bar width (in pixels)
var SCROLL_BAR_WIDTH = 15;

/**
 * setup() runs once at the very beginning
 */
function setup() {
  // Set canvas to fill web browser window
  let x = windowWidth - SCROLL_BAR_WIDTH;
  let y = windowHeight - SCROLL_BAR_WIDTH;
  canvas = createCanvas(x, y);
  canvas.position(SCROLL_BAR_WIDTH/2, SCROLL_BAR_WIDTH/2);
}

function windowResized() {
  let x = windowWidth - SCROLL_BAR_WIDTH;
  let y = windowHeight - SCROLL_BAR_WIDTH;
  resizeCanvas(x, y);
}

/**
 * draw() runs on an infinite loop after setup() is finished
 */
function draw() {
	
}