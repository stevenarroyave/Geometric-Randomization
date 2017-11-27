function setup() {
  createCanvas(1000, 1000);
//  noLoop();
frameRate(1);
}

function draw() {


  for (let x = 0; x < 100; x++) {
    let size = random(5, 100);
      fill(random(255), random(255), random(255));
   ellipse(random(width), random(height), size, size);
   rect(random(width), random(height), size, size);
   triangle(random(width), random(height),50,50,size,size);
 }
}
