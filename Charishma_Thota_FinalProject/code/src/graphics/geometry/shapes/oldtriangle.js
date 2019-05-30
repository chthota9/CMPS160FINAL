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
    constructor(shader,mouseX,mouseY) {
        super(shader);
  
        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
  
        this.rotationMatrix = new Matrix4();
        this.rotationMatrix.setRotate(5,0,0,1);
  
        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(0,0.05,0);
      //   this.translationMatrix.setTranslate(0,-0.05,0);
  
        this.scalingMatrix = new Matrix4();
        this.scalingMatrix.setScale(1.02,1.02,1.02);
  
        this.downScalingMatrix = new Matrix4();
        this.downScalingMatrix.setScale(0.98,0.98,0.98);
  
          this.scalingUp = true;
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(xMouse, yMouse) {
      var vertices = []
      const shapeSize = document.getElementById("shapeSlider").value/100;
  
      var vertex1 = new Vertex( -shapeSize+xMouse, shapeSize+yMouse, 0.0);
      var vertex2 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, 0.0);
      var vertex3 = new Vertex( xMouse,   -shapeSize+yMouse, 0.0);
  
  
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      return vertices;
     }
  
     render() {
         console.log(this.modelMatrix.elements)
         if(this.scalingUp) {
             this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);
          } else if(this.scalingUp == false) {
              this.modelMatrix = this.modelMatrix.multiply(this.downScalingMatrix);
          }
          
          if (this.modelMatrix.elements[0] > 1.25) {
              this.scalingUp = false;
          } else if(this.modelMatrix.elements[0] < 0.75) {
              this.scalingUp = true;
          }
          
          this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
  }
  
  //    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
  //    console.log(this.modelMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);