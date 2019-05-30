var _inputHandler = null;


var textureFilebol = false;
var lives = 3;
/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene) {
      this.score = 0;
      this.canvas = canvas;
      this.scene = scene;

      this.mousehold = false;

      _inputHandler = this;

      this.image = null;

      // Mouse Events

      this.canvas.onmousedown = function(ev) { 

        this.mousehold = true;
        _inputHandler.click(ev)
      };


      this.canvas.onmouseup = function(ev) {
        this.mousehold = false;
      };


    //   this.canvas.onmousemove = function(ev) { 
    
    //     if(this.mousehold) {
    //       // console.log(this.mousehold)
    //       _inputHandler.click(ev);
    //     }
    // };

      // Button Events
      document.getElementById('fileLoad').onclick = function() { _inputHandler.readSelectedFile() };

      document.getElementById('texInput').onchange = function() { _inputHandler.readTexture() };

      // HTML Slider Events
      document.getElementById('exampleSlider').addEventListener('mouseup', function() { console.log(this.value); });
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        const mX = ev.clientX;
        const mY = ev.clientY;
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;

        const xMouse  = 2*(mX/width) - 1.0
        const yMouse = -1*(2*(mY/height) - 1.0)

        console.log(xMouse, yMouse, yRafi)

        if(xMouse < 0.1 && xMouse > -0.1 && yMouse > yRafi - 0.1 && yMouse < yRafi + 0.1){
          document.getElementById("Points").textContent = ++this.score;  
        } else {
          console.log("LOSER");
          document.getElementById(lives--).remove();
        }
      
      
      // // Print x,y coordinates.
      //   console.log(ev.clientX, ev.clientY);

      //   const mX = ev.clientX;
      //   const mY = ev.clientY;
      //   const width = this.canvas.clientWidth;
      //   const height = this.canvas.clientHeight;

      //   const xMouse  = 2*(mX/width) - 1.0
      //   const yMouse = -1*(2*(mY/height) - 1.0)
      


      //   // console.log(textureFilebol);
      //   // var shape = new Triangle(shader, this.image);
      //   // this.scene.addGeometry(shape);


      //   const buttonTypeVal = document.getElementById("buttonColorType").innerHTML
      //   // console.log(buttonTypeVal);


      //   switch(this.state) {
            
  

      //       case 'square':
      //       //   var shape = new Square(shader,ev.clientX,ev.clientY,width,height);
      //         var shape = new Square(oldshader,xMouse,yMouse);
      //         break;
              
      //         case 'triangle':
      //       // var shape = new Triangle(shader, this.image);
      //           var shape = new Oldtriangle(oldshader, xMouse,yMouse);
      //         break;
              
      //       case 'circle':
      //       //   var shape = new Circle(shader,xMouse,yMouse);
      //         var shape = new Circle(oldshader,xMouse,yMouse);
      //           // var shape = new Circle(shader,ev.clientX,ev.clientY,width,height);
      //           break;

      //       case 'cube':

      //           if(!textureFilebol) {
      //               var shape = new Cube(oldshader,xMouse,yMouse);
      //           } else if(textureFilebol) {
      //               // var shape = new Triangle(shader, this.image);
      //               // console.log(this.image);
      //               var shape = new Cubetextured(shader, this.image, xMouse, yMouse);
      //           }
      //           break;


            
    
      //       default:
      //       //   var shape = new Square(shader,ev.clientX,ev.clientY,width,height);
      //           break;
      //       //   var shape = new Triangle(shader,xMouse,yMouse);
      //     }
      //   if(shape) this.scene.addGeometry(shape);
    }

    /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            // alert(fileReader.result);

            if(!textureFilebol) {
                var customObj = new CustomOBJ(oldshader, fileReader.result);
                _inputHandler.scene.addGeometry(customObj);
            } else {

                console.log(_inputHandler.image);
                var customObj = new CustomOBJ(shader, fileReader.result,_inputHandler.image);
                _inputHandler.scene.addGeometry(customObj);

            }
            
        }
    }

    readTexture() {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
        };

        var imgPath = document.getElementById("texInput").value;
        // _inputHandler.imgPath = imgPath
        var imgPathSplit = imgPath.split("\\");

        // Tell the browser to load an image
        image.src = 'objs/' + imgPathSplit[imgPathSplit.length - 1];
        textureFilebol = true;
        return true;
    }
}
