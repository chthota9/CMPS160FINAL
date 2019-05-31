var _inputHandler = null;


var textureFilebol = false;
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
      document.getElementById('Reset').onclick = function() {_inputHandler.resetScore()};
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

        // console.log(xMouse, yMouse, yRafi)

        if(xMouse < xRafi+0.1 && xMouse > xRafi-0.1 && yMouse > yRafi - 0.1 && yMouse < yRafi + 0.1){
          document.getElementById("Points").textContent = ++score;  
        } else {
        //   console.log(lives);
          document.getElementById(lives--).style = "color:red; visibility: hidden";
          if(lives == 0){
              this.resetScore();
          }
        }
      
    }

    /**
     * Function called to read a selected file.
     * 
     */
    resetScore(){
        //console.log("yeet")
        reset();
      }

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
