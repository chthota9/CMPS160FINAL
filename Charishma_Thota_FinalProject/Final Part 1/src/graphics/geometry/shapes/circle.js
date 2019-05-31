/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Circle}
 */
class Circle extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Circle} Triangle created
     */
    constructor(shader,mouseX,mouseY, flag, id) {
        super(shader);
        this.mx = mouseX;
        this.my = mouseY;
        this.flag = flag;
        this.speed = speed;
        this.id = id;
        console.log(this.speed);
        speed = speed * 1.01;

        //this.y = 1;
        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
  

        const aRandom =Math.random() /10;

        // const bRandom = Math.random() / 10;
        const bRandom = 0.01
        


      this.downtranslationMatrix = new Matrix4();
      this.downtranslationMatrix.setTranslate(0,-this.speed,0);

      this.backTranslateMatrix = new Matrix4();
      this.backTranslateMatrix.setTranslate(0, 2, 0);

  
          this.scalingUp = true;
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(xMouse, yMouse) {
        var vertices = []

        //const shapeSize = document.getElementById("shapeSlider").value/100;
        var shapeSize = 0.1;
       var r = shapeSize;
 
       var red = Math.random();
       var blue = Math.random();
       var green = Math.random();
       var center = new Vertex(xMouse, yMouse,0.0, red, blue, green); 
       var last = new Vertex(xMouse, yMouse,0.0, red, blue, green); 
       
       
       const segmentCount = 20;
       
       console.log(red, blue, green);
 
 
       for (var i = 0; i <= segmentCount; i++){
         
         vertices.push(center);
         var tVertext = new Vertex(xMouse + r*Math.cos(i*2*Math.PI/segmentCount),yMouse + r*Math.sin(i*2*Math.PI/segmentCount) ,0.0, red, blue, green);
         vertices.push(tVertext);
         vertices.push(last)
         last = tVertext
 
 
       }
  
        return vertices;
     }
  
     render() {
        //console.log(this.modelMatrix);
            if(this.flag == 1){
                this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
                yRafi -= this.speed;
                if(yRafi < -1){
                    this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
                    yRafi = 1;
                    document.getElementById(lives--).style = "color:red; visibility: hidden";
                    if(lives == 0){
                        reset();
                    }
                }
            } else {
                this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
                this.my -= this.speed;
                if(this.my < -1){
                    this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
                    this.my = 1;
                }
            }
            

        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
  }