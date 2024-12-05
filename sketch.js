const CELLSIZES = [20, 20, 20, 50, 50, 70, 70, 90];
const COLOURS = ['#F08080','#7B68EE','#F0E68C','#E6E6FA','#8FBC8B']

function setup() {
  createCanvas(600, 600);
  noLoop()
}

function draw() {
  background(220);
  const CELLSIZE = 20;
  //noStroke()
  strokeWeight(3);
  ///////
  //simple grid
  //////
  /*
  for (let y = 0; y < height; y += CELLSIZE) {
    for (let x = 0; x < width; x += CELLSIZE) {
      fill(random(255))
      rect(x, y, CELLSIZE); /*width is cellsize
    }
  }
  
 let x = 0;
 let y = 0;
 let currentWidth = random(CELLSIZE);
 let currentHeight = random(CELLSIZE);
 while(y < height){
  let cellsize  = random(CELLSIZES); // provides a random choice from cellsizes array
  while(x < width){
    fill(random(COLOURS))
    rect(x, y, currentWidth, currentHeight)
    x += currentWidth;
    currentWidth = random(CELLSIZES);
  }
  x = 0;
  y += currentHeight;
  currentHeight = random(CELLSIZES); */
  

  /*const CELLSIZE = 50;*/
  const ARCVALUES = [TAU*0.25, TAU*0.5, TAU *.75, TAU];

  for (let y = 0; y < height; y += CELLSIZE){
    for (let x = 0; x < width; x += CELLSIZE){
      fill(random(COLOURS))
      //draw circle in middle of cell
      
      arc(x+CELLSIZE/2, y + CELLSIZE/2, CELLSIZE, CELLSIZE, 0, random(ARCVALUES))
    }
  }

 
 
}
