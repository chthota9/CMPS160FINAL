var shader = null;
var oldshader = null;
var inputHandler = null;
var yRafi = 1;
var xRafi = 1.8*Math.random() - 1;
var speed = 0.01;
var xArray = [xRafi, 1.8*Math.random()-1, 1.8*Math.random()-1, 1.8*Math.random()-1, 1.8*Math.random()-1];
var lives = 3;
var score = 0;


function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");
  xArray = [xRafi, 1.8*Math.random()-1, 1.8*Math.random()-1, 1.8*Math.random()-1, 1.8*Math.random()-1];
  //speed = 0.01;
  lives = 3;
  score = 0;

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  this.scene = scene;
  inputHandler = new InputHandler(canvas, scene);

  // Initialize shader
  shader = new Shader(gl, ASG3_VSHADER, ASG3_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");

  // Add uniforms
  shader.addUniform("u_Sampler", "sampler2D", 0);


  

  oldshader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  oldshader.addAttribute("a_Position");
  oldshader.addAttribute("a_Color");

  // Add uniforms
  var idMatrix = new Matrix4();
  oldshader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);
  
  shader.addUniform("u_ModelMatrix", "mat4", idMatrix.elements);

  otherShader = new Shader(gl, ASG2_VSHADER, ASG2_FSHADER);
  otherShader.addAttribute("a_Position");
  otherShader.addAttribute("a_Color");


  this.shader = otherShader;

  // var 
  // console.log()



  inputHandler['state'] = 'triangle';

  // Initialize renderer with scene and camera
  
  renderer = new Renderer(gl, scene, null);
  renderer.start();
  
  var rand = 3*Math.random();
  console.log(xRafi);
  var shape;
  if(rand > 2){
    shape = new Square(oldshader, xRafi, yRafi,0);
  } else if (rand > 1){
    shape = new Oldtriangle(oldshader, xRafi, yRafi,0);
  } else {
    shape = new Circle(oldshader, xRafi, yRafi,0);
  }
  
  scene.addGeometry(shape);

  for(var j = 1; j < 5; j++){
    rand = 3*Math.random();
    console.log(j, xArray[j])
    if(rand > 2){
      shape = new Square(oldshader, xArray[j],1, j);
    } else if (rand > 1){
      shape = new Oldtriangle(oldshader, xArray[j],1, j);
    } else {
      shape = new Circle(oldshader, xArray[j],1, j);
    }
    scene.addGeometry(shape);
  }

  // start()
}

function clearCanvas() {
  inputHandler.scene.geometries = []

  console.log("clear canvas")
}


function selectShape(typeStr) {

  inputHandler['state'] = typeStr
  console.log(inputHandler)
  // console.log("this is cools")
}


function changeValue()
{
    // Changes the value of the button
    // document.form.button.value = new Date();

    // Changes the text on the button

    if(document.form.button.innerHTML == "Solid") {

      document.form.button.innerHTML = "Rainbow";
    } else {
      document.form.button.innerHTML = "Solid";

    }
    // console.log(document.form.button.innerHTML);
}

function reset(){
  
  document.getElementById("Points").textContent = "0";
  document.getElementById(1).style = "color:red; visibility: visible";
  document.getElementById(2).style = "color:red; visibility: visible";
  document.getElementById(3).style = "color:red; visibility: visible";
  //main();
  lives = 3;
  score = 0;
  speed = 0.01;
  this.scene.clearGeometries();

  for(var x =0; x < 5; x++){
    newRand(x);
  }
}

function newRand(j){
  console.log(speed)
  if (j == 0){
    xRafi = 1.8*Math.random()-1;
    yRafi = 1;
    xArray[j] = xRafi;
  } else {
    xArray[j] = 1.8*Math.random()-1;
  }
  
  rand = 3*Math.random();
  if(rand > 2){
    shape = new Square(oldshader, xArray[j] ,1, j);
  } else if (rand > 1){
    shape = new Oldtriangle(oldshader, xArray[j],1, j);
  } else {
    shape = new Circle(oldshader, xArray[j],1, j);
  }
  scene.addGeometry(shape);
}

function updateShape(mode, r, g, b){
  var shape;
  if(mode == 2){
    shape = new SquareCopy(this.shader, r,g,b);
  } else if(mode == 1){
    shape = new TriangleCopy(this.shader, r,g,b);
  } else {
    shape = new CircleCopy(this.shader, r,g,b);
  }
  scene.addGeometry(shape);
}

function reset2(){
  // document.getElementById("Points").textContent = "0";
  // document.getElementById(1).style = "color:red; visibility: visible";
  // document.getElementById(2).style = "color:red; visibility: visible";
  // document.getElementById(3).style = "color:red; visibility: visible";
  //main();
  // lives = 3;
  // score = 0;
  // speed = 0.01;
  this.scene.clearGeometries();

  for(var x =0; x < 5; x++){
    newRand(x);
  }
}

function newRand(j){
  console.log(speed)
  if (j == 0){
    xRafi = 1.8*Math.random()-1;
    yRafi = 1;
    xArray[j] = xRafi;
  } else {
    xArray[j] = 1.8*Math.random()-1;
  }
  
  rand = 3*Math.random();
  if(rand > 2){
    shape = new Square(oldshader, xArray[j] ,1, j);
  } else if (rand > 1){
    shape = new Oldtriangle(oldshader, xArray[j],1, j);
  } else {
    shape = new Circle(oldshader, xArray[j],1, j);
  }
  scene.addGeometry(shape);
}