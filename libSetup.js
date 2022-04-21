
let pImg1, pImg2;
let randomNum;
let colOne = [];
let textColOne = [];
let textColTwo = [];
let textColThree = [];
let startClockSet = [];
let codeImgs = [];
let clockLength = 31;
let marginW, marginH;
let menuH;
let glyphSize = 50;
let input;
let keyLeft, keyRight, keyUp, keyDown;
let genCount;
let tiny;
let apercu;
let color1, color2, color3, color4, color5;
let xPos, yPos;
let moveX, moveY;
let shapeMousePosX, shapeMousePosY;
let typeMousePosX, typeMousePosY;
let messageOne, messageTwo, errorMessage;
let imageCopiesKeyCount;
let imageCopiesMouseCount;
let imageCopiesMouseClickCount;
let imageCopiesRandomCount;
let imageCopiesStartCount;
let imageCopiesTimeCount;
let imageRotationMouseClickCount;
let imageRotationRandomCount;
let imageRotationStartCount;
let imageRotationTimeCount;
let imageSizeMouseClickCount;
let imageSizeRandomCount;
let imageSizeStartCount;
let imageSizeTimeCount;
let lineCopiesKeyCount;
let lineCopiesMouseCount;
let lineCopiesMouseClickCount;
let lineCopiesRandomCount;
let lineCopiesStartCount;
let lineCopiesTimeCount;
let lineRotationMouseClickCount;
let lineRotationRandomCount;
let lineRotationStartCount;
let lineRotationTimeCount;
let lineSizeMouseClickCount;
let lineSizeRandomCount;
let lineSizeStartCount;
let lineSizeTimeCount;
let shapeCopiesKeyCount;
let shapeCopiesMouseCount;
let shapeCopiesMouseClickCount;
let shapeCopiesRandomCount;
let shapeCopiesStartCount;
let shapeCopiesTimeCount;
let shapeRotationMouseClickCount;
let shapeRotationRandomCount;
let shapeRotationStartCount;
let shapeRotationTimeCount;
let shapeSizeMouseClickCount;
let shapeSizeRandomCount;
let shapeSizeStartCount;
let shapeSizeTimeCount;
let typeCopiesRandomCount;
let typeCopiesStartCount;
let typeCopiesTimeCount;
let typeRotationMouseClickCount;
let typeRotationRandomCount;
let typeRotationStartCount;
let typeRotationTimeCount;
let typeSizeMouseClickCount;
let typeSizeRandomCount;
let typeSizeStartCount;
let typeSizeTimeCount;

let imageContentStartClock;
let imageContentTimeClock;
let imageCopiesTimeClock;
let imageDrawTimeClock;
let imageRotationTimeClock;
let imageSizeTimeClock;
let imagePositionTimeClock;
let lineColorStartClock;
let lineColorTimeClock;
let lineCopiesStartClock;
let lineCopiesTimeClock;
let lineDrawStartClock;
let lineDrawTimeClock;
let linePositionTimeClock;
let lineRotationTimeClock;
let lineSizeStartClock;
let lineSizeTimeClock;
let shapeColorStartClock;
let shapeColorTimeClock;
let shapeCopiesTimeClock;
let shapeDrawTimeClock;
let shapePositionTimeClock;
let shapeRotationTimeClock;
let shapeSizeStartClock;
let shapeSizeTimeClock;
let typeColorStartClock;
let typeCopiesTimeClock;
let typeDrawTimeClock;
let typePositionTimeClock;
let typeRotationTimeClock;
let typeSizeTimeClock;
let showCode;

let val1, val2, val3;

colOne = ["something", "type", "shape", "image", "line"];
colTwo = ["do something", "draw", "change size", "change position", "change rotation", "change color", "change content"];
colThree = ["something happens", "the sketch starts", "the mouse moves", "a key is pressed", "the mouse is clicked", "randomly", "after some time"];
textColOne = ["type", "shape", "image", "line"];
textColTwo = ["Draw", "Size", "Position", "Rotation", "Color", "Content"];
textColThree = ["Start", "Mouse", "Key", "MouseClick", "Random", "Time"];

let canvas;
let myDiv;

function preload(){
  pImg1 = loadImage('data/plantImg1.png');
  pImg2 = loadImage('data/plantImg2.png');
  tiny = loadFont('data/tiny_160.otf');
  apercu = loadFont('data/apercu.otf');
}

function libSetup(){
  imageMode(CENTER);
  textAlign(CENTER);
  imageCopiesKeyCount = 0;
  imageCopiesMouseCount = 0;
  imageCopiesMouseClickCount = 0;
  imageCopiesRandomCount = 0;
  imageCopiesStartCount = 0;
  imageCopiesTimeCount = 0;
  imageRotationMouseClickCount = 0;
  imageRotationRandomCount = 0;
  imageRotationStartCount = 0;
  imageRotationTimeCount = 0;
  imageSizeMouseClickCount = 0;
  imageSizeRandomCount = 0;
  imageSizeStartCount = 0;
  imageSizeTimeCount = 0;
  lineCopiesKeyCount = 0;
  lineCopiesMouseCount = 0;
  lineCopiesMouseClickCount = 0;
  lineCopiesRandomCount = 0;
  lineCopiesStartCount = 0;
  lineCopiesTimeCount = 0;
  lineRotationMouseClickCount = 0;
  lineRotationRandomCount = 0;
  lineRotationStartCount = 0;
  lineRotationTimeCount = 0;
  lineSizeMouseClickCount = 0;
  lineSizeRandomCount = 0;
  lineSizeStartCount = 0;
  lineSizeTimeCount = 0;
  shapeCopiesKeyCount = 0;
  shapeCopiesMouseCount = 0;
  shapeCopiesMouseClickCount = 0;
  shapeCopiesRandomCount = 0;
  shapeCopiesStartCount = 0;
  shapeCopiesTimeCount = 0;
  shapeRotationMouseClickCount = 0;
  shapeRotationRandomCount = 0;
  shapeRotationStartCount = 0;
  shapeRotationTimeCount = 0;
  shapeSizeMouseClickCount = 0;
  shapeSizeRandomCount = 0;
  shapeSizeStartCount = 0;
  shapeSizeTimeCount = 0;
  typeCopiesRandomCount = 0;
  typeCopiesStartCount = 0;
  typeCopiesTimeCount = 0;
  typeRotationMouseClickCount = 0;
  typeRotationRandomCount = 0;
  typeRotationStartCount = 0;
  typeRotationTimeCount = 0;
  typeSizeMouseClickCount = 0;
  typeSizeRandomCount = 0;
  typeSizeStartCount = 0;
  typeSizeTimeCount = 0;

  imageContentStartClock = 0;
  imageContentTimeClock = 0;
  imageCopiesTimeClock = 0;
  imageDrawTimeClock = 0;
  imageRotationTimeClock = 0;
  imageSizeTimeClock = 0;
  imagePositionTimeClock = 0;
  lineColorStartClock = 0;
  lineColorTimeClock = 0;
  lineCopiesStartClock = 0;
  lineCopiesTimeClock = 0;
  lineDrawStartClock = 0;
  lineDrawTimeClock = 0;
  linePositionTimeClock = 0;
  lineRotationTimeClock = 0;
  lineSizeStartClock = 0;
  lineSizeTimeClock = 0;
  shapeColorStartClock = 0;
  shapeColorTimeClock = 0;
  shapeCopiesTimeClock = 0;
  shapeDrawTimeClock = 0;
  shapePositionTimeClock = 0;
  shapeRotationTimeClock = 0;
  shapeSizeStartClock = 0;
  shapeSizeTimeClock = 0;
  typeColorStartClock = 0;
  typeCopiesTimeClock = 0;
  typeDrawTimeClock = 0;
  typePositionTimeClock = 0;
  typeRotationTimeClock = 0;
  typeSizeTimeClock = 0;

  showCode = true;

  for(let c=0; c<=clockLength; c++){
    startClockSet[c] = 0;
  }

  errorMessage = "no function :("
  moveX = 0;
  moveY = 0;
  color1 = color('#000000');
  color2 = color('#355E92');
  color3 = color('#EA8A4D');
  color4 = color('#91C85C');
  color5 = color('#E6B8B9');
  randomNum = 0;
  genCount = 0;
  keyLeft = 0;
  keyRight = 0;
  keyUp = 0;
  keyDown = 0;
  marginW = 10;
  marginH = marginW;
  textFont(tiny);
  textSize(glyphSize);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    keyLeft += QUARTER_PI*0.2;
  } else if (keyCode === RIGHT_ARROW) {
    keyRight += QUARTER_PI*0.2;
  } else if (keyCode === UP_ARROW) {
    keyUp += QUARTER_PI*0.2;
  } else if (keyCode === DOWN_ARROW) {
    keyDown += QUARTER_PI*0.2;
  }
  if (key == 'h' || key == 'H') {
    if(showCode == false){
      showCode = true;
      console.log("showCode == true");
    } else if (true) {
      showCode = false;
      console.log("showCode == false");
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
