/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Oldtriangle}
 */
class Oldtriangle extends Geometry {
    /**
     * Constructor for Triangle.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Oldtriangle} Triangle created
     */
    constructor(shader,mouseX,mouseY, id) {
        super(shader);
  
        this.mx = mouseX;
        this.my = mouseY;
        this.speed = speed;
        this.id = id;
        this.flag = 0;
        //console.log(this.speed);

        this.red = Math.random();
       this.blue = Math.random();
       this.green = Math.random();

       if(id == 0){
        updateShape(1, this.red, this.green, this.blue);
    }

        speed = 1.01 * speed;

        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;

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
      const shapeSize = 0.1;
  
      var vertex1 = new Vertex( -shapeSize+xMouse, shapeSize+yMouse, 0.0, this.red, this.green, this.blue);
      var vertex2 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, 0.0, this.red, this.green, this.blue);
      var vertex3 = new Vertex( xMouse, -shapeSize+yMouse, 0.0, this.red, this.green, this.blue);
  
  
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      return vertices;
     }
  
     render() {
        //console.log(this.modelMatrix);

        if(this.id == 0){
            this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
            yRafi -= this.speed;
            if(yRafi < -1){
                console.log("in here", yRafi)
                
                // this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
                // yRafi = 1;
                document.getElementById(lives--).style = "color:red; visibility: hidden";
                //lives--;
                if(lives == 0){
                    reset();
                } else {
                    if(this.flag == 0){
                        newRand(this.id);
                        this.id = 6;
                        this.flag = 1;
                    }
                }
            }
        } else {
            this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
            this.my -= this.speed;
            if(this.my < -1){
                if(this.flag == 0){
                    newRand(this.id);
                    this.flag = 1;
                }
                
            }
        }
        




        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
  }