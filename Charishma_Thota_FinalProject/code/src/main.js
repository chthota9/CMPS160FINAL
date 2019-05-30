var shader = null;
var oldshader = null;
var inputHandler = null;
var yRafi = 1;


function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
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

  // var 
  // console.log()



  inputHandler['state'] = 'triangle';

  // Initialize renderer with scene and camera
  
  renderer = new Renderer(gl, scene, null);
  renderer.start();
  
  
  var shape = new Circle(oldshader, 0, yRafi);
  scene.addGeometry(shape);

  // start()
}


// function start() {
//   var shape = new Circle(oldshader,0.2,0);
//   scene.addGeometry(shape)

//}

function clearCanvas() {
  inputHandler.scene.geometries = []

  console.log("clear canvas")
}


function selectShape(typeStr) {
  // console.log("this is a square");
  // inputHandler['shape'] = 'square';
  // inputHandler.append()

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