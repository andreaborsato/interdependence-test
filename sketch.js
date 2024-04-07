let _nsRate; // incremento per spostamento coordinate punti bubbles
let _maxPoint; // numero max di punti per oggetto
let _aryObject = [];
let _objectNum;
let finalColorArray; // array contenente tutti i colori della palette
let biggestSize; //
let capStyle; // tipo di cap: round o square
let capArray; // array conetenente i capstyle
let flag; // variabile di controllo per gli hover

let gifHeight; // per esportare gif
let gifWidth; // per esportare gif
let objColor;
let c; // colore pickato per hover
let tabActive; // variabile per hover solo se finestra è attiva
let mouseBubble; // bubble in corrispondenza del puntatore del mouse

// per esportare video/gif

// var capturer = new CCapture( {
//   framerate: 30,
//   format: "webm",
//   name: "movie",
//   quality: 100,
//   verbose: true,
// } );

let ctx;
let myFrameCount = 0;
let myFrameRate = 120;
let mySeconds = 10;
let videoDuration = myFrameRate * mySeconds;

// per souni

let myCanvas;
let canvasPos;
let lastCanvasPosition = { x: 0, y: 0 };
let element;
let position;
let horizontalScrollPosition;
let verticalScrollPosition;

let song;
let songArray = [];

// dimensioni canvas
let myWidth;
let myHeight;

let d; // distanza tra punti
let myFont;
let myFont2;
let myFont3;
let myTextSize;
let dateTextSize;

let polimi;
let polimi2;
let designWeek;
let partner;

function preload() {
  myFont = loadFont("./font/milligram_macro_bold.otf");
  myFont2 = loadFont("./font/milligram_macro_medium.otf");
  myFont3 = loadFont("./font/milligram_macro_regular.otf");
  // polimi = loadImage('./images/polimi_1.png');
  // polimi2 = loadImage('./images/polimi_2.png');
  polimi = loadImage("./images/loghi sistema.png");
  designWeek = loadImage("./images/logo-design-week.png");
  // partner = loadImage('./images/loghi-partner.png');
}

function setup() {
  myWidth = windowWidth;
  myHeight = windowHeight;
  myCanvas = createCanvas(myWidth, myHeight);
  myCanvas.parent("container");

  element = select("canvas"); // This is a p5.js element
  position = element.position(); // Get position relative to parent
  lastCanvasPosition = element.position();

  if (windowWidth > windowHeight) {
    biggestSize = windowWidth;
  } else {
    biggestSize = windowHeight;
  }
  frameRate(myFrameRate);
  strokeJoin(ROUND);
  noFill();
  blendMode(DIFFERENCE);

  _objectNum = 8;
  let newSize = _objectNum;
  finalColorArray = Array.from(
    { length: newSize },
    (_, i) => myColorArray[i % myColorArray.length]
  ); // creo array da myColorArray
  _nsRate = 0.00047;
  _maxPoint = 20;
  capArray = new Array({ length: _objectNum }); // array per stile cap

  for (let i = 0; i < _objectNum; i++) {
    // creo numero bubbles basate su classe line e le metto dentro array _aryObject
    capStyle = ROUND;
    capArray.push(capStyle);
    _aryObject.push(new line(finalColorArray[i % _objectNum], capArray[i]));
  }

  mouseBubble = new mouseLine(mouseX, mouseY, (255, 255, 255)); // creo bubble per puntatore mouse basata su classe mouseBubble
  mouseBubble.draw();

  textFont(myFont);

  textAlign(CENTER, CENTER);
}

function draw() {
  //canvasPos = myCanvas.position();

  noCursor();

  hideMouse();
  clear();
  background(0);
  push();
  fill(255);
  noStroke();
  myTextSize = textSize((13 * width) / 100);
  let textWidth1 = textWidth("interdependence"); // Calculate the width of the first text
  let textHeight1 = textSize(); // Get the current text size for the first text
  let x1 = width / 2; // Your desired x position for the first text
  let y1 = height / 2; // Position the first text at 65% of the canvas height
  text("interdependence", x1, y1);
  // let myText = text('interdependence', width/2, height/2);
  dateTextSize = textSize((5 * width) / 100);
  textFont(myFont2);
  // textAlign(CENTER, CENTER);

  // Calculate the y position for the second text based on the first text's size and desired distance
  let textWidth2 = textWidth("16/04 - 21/04   2024"); // Calculate the width of the second text
  let textHeight2 = textSize(); // Get the current text size for the second text
  let x2 = width * 0.25; // Your desired x position for the second text
  let y2 = y1 + textHeight1 / 1.3; // Position the second text below the first with a constant distance
  text("16/04 - 21/04   2024", x2, y2);

  pop();

  // POLIMI LOGO

  if (windowWidth < 900) {
    frameRate(30);
    let imgWidth = windowWidth * 0.7; // Adjust the width as needed
    let imgHeight = (imgWidth * polimi.height) / polimi.width; // Maintain aspect ratio
    let imgHeight2 = (imgWidth * designWeek.height) / designWeek.width; // Maintain aspect ratio
    let imgX = (windowWidth * 2) / 100;
    let imgX2 = (windowWidth * 84) / 100;

    let imgY = (windowHeight * 2) / 100;
    let imgY2 = (windowHeight * 4) / 100;
    image(polimi, imgX, imgY, imgWidth, imgHeight);
    image(designWeek, imgX2, imgY2, imgWidth / 6, imgHeight2 / 6);
  } else if (windowWidth > 900) {
    let imgWidth = windowWidth * 0.35; // Adjust the width as needed
    let imgHeight = (imgWidth * polimi.height) / polimi.width; // Maintain aspect ratio
    let imgHeight2 = (imgWidth * designWeek.height) / designWeek.width; // Maintain aspect ratio

    let imgX = (windowWidth * 2) / 100;
    let imgX2 = (windowWidth * 91) / 100;

    let imgY = (windowHeight * 2) / 100;
    let imgY2 = (windowHeight * 4) / 100;

    image(polimi, imgX, imgY, imgWidth, imgHeight);
    image(designWeek, imgX2, imgY2, imgWidth / 6, imgHeight2 / 6);
  }

  // let imgWidth = windowWidth * 0.2; // Adjust the width as needed
  // let imgHeight = imgWidth * polimi.height / polimi.width; // Maintain aspect ratio
  // let imgX = windowWidth-(98*windowWidth/100);
  // let imgY = windowHeight-(99*windowHeight/100);
  // image(polimi, imgX, imgY, imgWidth, imgHeight);

  // let imgWidth2 = windowWidth * 0.3; // Adjust the width as needed
  // let imgHeight2 = imgWidth2 * polimi2.height / polimi2.width; // Maintain aspect ratio
  // let imgX2 = windowWidth-(50*windowWidth/100);
  // let imgY2 = windowHeight-(99*windowHeight/100);
  // image(polimi2, imgX2, imgY2, imgWidth2, imgHeight2);

  let totalDistance = 0;
  let point = mouseBubble.aryPoints;

  for (let j = 19; j >= 0; j--) {
    // calcolare distanza per evitare effetto scia
    if (j === 0) {
      // caso speciale per primo elemento
      continue;
    }
    d = Math.floor(
      Math.sqrt(
        (point[j][0] - point[j - 1][0]) ** 2 +
          (point[j][1] - point[j - 1][1]) ** 2
      )
    );
    totalDistance += d;

    if (totalDistance > 0) {
      point[j][0] = point[j - 1][0];
      point[j][1] = point[j - 1][1];
    }
  }

  if (windowWidth > 900) {
    mouseBubble.update();
    mouseBubble.draw();
  }

  for (let i = 0; i < _objectNum; i++) {
    _aryObject[i].update();
    _aryObject[i].draw();
  }

  if (mouseY >= height) {
    mouseAppear();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  for (let i = 0; i < _objectNum; i++) {
    // creo numero bubbles basate su classe line e le metto dentro array _aryObject
    capStyle = ROUND;
    capArray.push(capStyle);
    _aryObject.push(new line(finalColorArray[i % _objectNum], capArray[i]));
  }
}

window.onscroll = function () {
  // Code to execute when the window is scrolled
  // For example, you might adjust the canvas position or visibility here
  verticalScrollPosition = window.scrollY;
  horizontalScrollPosition = window.scrollX;
  console.log(verticalScrollPosition, horizontalScrollPosition);
};

class mouseLine {
  // classe per bubble puntatore mouse
  constructor(x, y, bubbleColor) {
    this.nsX = x;
    this.nsY = y;
    this.cap = c;
    this.color = color(bubbleColor);
    // this.sw = random(biggestSize/20, biggestSize/8);
    this.sw = biggestSize / 25;
    this.aryPoints = [];
    for (let i = 0; i < 20; i++) {
      let val = 0;
      this.aryPoints.push(val);
    }
  }
  update() {
    this.nsX = mouseX;
    this.nsY = mouseY;
    this.aryPoints.unshift([this.nsX, this.nsY]);
    while (this.aryPoints.length > _maxPoint) {
      this.aryPoints.pop();
    }
  }
  draw() {
    stroke(this.color);
    strokeWeight(this.sw);
    push();
    strokeCap(this.cap);
    beginShape();
    for (let i = 0; i < this.aryPoints.length; i++) {
      curveVertex(this.aryPoints[i][0], this.aryPoints[i][1]);
    }
    endShape();
    pop();
  }
}

class line {
  // classe per tutte le altre bubble
  constructor(myColor, c) {
    this.nsX = random(200);
    this.nsY = random(200);
    this.cap = c;
    this.color = color(myColor);

    this.sw = random(biggestSize / 20, biggestSize / 8);
    this.aryPoints = [];
  }
  update() {
    this.nsX += _nsRate;
    this.nsY += _nsRate;
    this.aryPoints.unshift([
      (width / 3) * cos(6 * PI * noise(this.nsX)),
      (height / 3) * sin(6 * PI * noise(this.nsY)),
    ]);

    while (this.aryPoints.length > _maxPoint) {
      this.aryPoints.pop();
    }
  }
  draw() {
    stroke(this.color);
    strokeWeight(this.sw);
    push();
    translate(width / 2, height / 2);
    strokeCap(this.cap);
    beginShape();

    for (let i = 0; i < this.aryPoints.length; i++) {
      curveVertex(this.aryPoints[i][0], this.aryPoints[i][1]);
    }
    endShape();
    pop();
  }
}

// Show the element when the JavaScript is ready
window.onload = function () {
  document.getElementById("belowCanvas").style.display = "block";
};
