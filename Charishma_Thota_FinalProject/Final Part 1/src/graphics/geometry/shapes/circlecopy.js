/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {CircleCopy}
 */
class CircleCopy extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {CircleCopy} Triangle created
     */
    constructor(shader, r, g, b) {
        super(shader);
    //     this.mx = mouseX;
    //     this.my = mouseY;
    //     this.flag = 0;
    //     this.speed = speed;
    //     this.id = id;
    //     //console.log(this.speed);
    //     speed = speed * 1.01;

    //     this.red = Math.random();
    //    this.blue = Math.random();
    //    this.green = Math.random();

    //    if(id == 0){
    //        updateShape(0, this.red, this.blue, this.green);
    //    }

        //this.y = 1;
        this.vertices = this.generateTriangleVertices(r, g, b);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
  

       // const aRandom =Math.random() /10;

        // const bRandom = Math.random() / 10;
       // const bRandom = 0.01
        


    //   this.downtranslationMatrix = new Matrix4();
    //   this.downtranslationMatrix.setTranslate(0,-this.speed,0);

    //   this.backTranslateMatrix = new Matrix4();
    //   this.backTranslateMatrix.setTranslate(0, 2, 0);

  
         // this.scalingUp = true;
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(x,g,b) {
        var vertices = []

        //const shapeSize = document.getElementById("shapeSlider").value/100;
        var shapeSize = 0.1;
       var r = shapeSize;
 
       
       var center = new Vertex(0.9, -0.9,0.0, x, g, b); 
       var last = new Vertex(0.9, -0.9,0.0, x, g, b); 
       
       
       const segmentCount = 20;
 
 
       for (var i = 0; i <= segmentCount; i++){
         
         vertices.push(center);
         var tVertext = new Vertex(0.9 + r*Math.cos(i*2*Math.PI/segmentCount),-0.9 + r*Math.sin(i*2*Math.PI/segmentCount) ,0.0, x, g, b);
         vertices.push(tVertext);
         vertices.push(last)
         last = tVertext
 
 
       }
  
        return vertices;
     }
  }