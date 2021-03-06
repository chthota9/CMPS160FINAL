/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Cube}
 */
class Cube extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Cube} Triangle created
     */
    constructor(shader,mouseX,mouseY) {
        super(shader);
        this.mx = mouseX;
        this.my = mouseY;
        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
  
        this.rotationMatrix = new Matrix4();
        this.rotationMatrix.setRotate(5,0.2,0.2,0);
  

        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(xMouse, yMouse) {
      var vertices = []
  
      const shapeSize = document.getElementById("shapeSlider").value/100;
  
      var vertex1 = new Vertex( shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      var vertex2 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      var vertex3 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, 0.0);

    //   var vertex4 = new Vertex(-shapeSize+xMouse, shapeSize+yMouse, 0.0);
      var vertex5 = new Vertex( shapeSize+xMouse, shapeSize+yMouse, 0.0);
    //   var vertex6 = new Vertex( shapeSize+xMouse,   -shapeSize+yMouse, 0.0);

      var vertex7 = new Vertex( shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      var vertex8 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      var vertex9 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, -2*shapeSize);

      var vertex10 = new Vertex(-shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      var vertex11 = new Vertex( shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      var vertex12 = new Vertex( shapeSize+xMouse,   -shapeSize+yMouse, -2*shapeSize);



      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex1);
      vertices.push(vertex5);
      vertices.push(vertex3);
      vertices.push(vertex1);
      vertices.push(vertex5);
      vertices.push(vertex7);
      vertices.push(vertex5);
      vertices.push(vertex7);
      vertices.push(vertex11);
      vertices.push(vertex5);
      vertices.push(vertex3);
      vertices.push(vertex11);
      vertices.push(vertex3);
      vertices.push(vertex11);
      vertices.push(vertex9);
      vertices.push(vertex7);
      vertices.push(vertex2);
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex7);
      vertices.push(vertex8);
      vertices.push(vertex2);
      vertices.push(vertex8);
      vertices.push(vertex3);
      vertices.push(vertex3);
      vertices.push(vertex8);
      vertices.push(vertex9);

    //   vertices.push(vertex4);
    //   vertices.push(vertex5);
    //   vertices.push(vertex6);

    //   vertices.push(vertex7);
    //   vertices.push(vertex8);
    //   vertices.push(vertex9);

    //   vertices.push(vertex10);
    //   vertices.push(vertex11);
    //   vertices.push(vertex12);
  
        return vertices;
     }
  
     render() {
        //  console.log(this.modelMatrix.elements)
        //  if(this.scalingUp) {
        //      this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);
        //   } else if(this.scalingUp == false) {
        //       this.modelMatrix = this.modelMatrix.multiply(this.downScalingMatrix);
        //   }
          
        //   if (this.modelMatrix.elements[0] > 1.25) {
        //       this.scalingUp = false;
        //   } else if(this.modelMatrix.elements[0] < 0.75) {
        //       this.scalingUp = true;
        //   }

        this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);

          
        // this.modelMatrix = this.modelMatrix.setTranslate(this.mx,this.my,0);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
  }
  
  //    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
  //    console.log(this.modelMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);