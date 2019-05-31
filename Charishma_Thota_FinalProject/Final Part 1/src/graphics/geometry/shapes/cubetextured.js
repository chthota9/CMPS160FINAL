/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Cubetextured}
 */
class Cubetextured extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Cubetextured} Triangle created
     */
    constructor(shader,image, mouseX,mouseY) {
        super(shader);
        this.mx = mouseX;
        this.my = mouseY;

        this.image = image;
        
        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
  
        this.rotationMatrix = new Matrix4();
        this.rotationMatrix.setRotate(5,0.2,0.2,0);
  

        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(xMouse, yMouse) {
      var vertices = []
  
      var shapeSize = document.getElementById("shapeSlider").value/100;
  
      var vertex1 = new Vertex( shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex1.texCoord = [1.0,0.0];
      var vertex2 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex2.texCoord = [0.0,0.0]
      var vertex3 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, 0.0);
      vertex3.texCoord = [0.0,1.0]
      var vertex4 = new Vertex( shapeSize+xMouse, shapeSize+yMouse, 0.0);
      vertex4.texCoord = [1.0,1.0]


      var vertex5 = new Vertex(shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex5.texCoord = [0.0,0.0];

      var vertex6 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, 0.0);
      vertex6.texCoord = [0.0,1.0];


      var vertex7 = new Vertex(shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex7.texCoord = [1.0,0.0]


      var vertex8 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      vertex8.texCoord = [1.0,1.0]


      var vertex9 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, 0.0);
      vertex9.texCoord = [0.0,0.0]

      var vertex10 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, -2*shapeSize);
      vertex10.texCoord = [0.0,1.0]


      var vertex11 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      vertex11.texCoord = [1.0,1.0]

      var vertex12 = new Vertex(shapeSize+xMouse, shapeSize+yMouse, 0);
      vertex12.texCoord = [1.0,0.0]




      var vertex13 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex13.texCoord = [1.0,0.0]


      var vertex14 = new Vertex(-shapeSize+xMouse, shapeSize+yMouse, 0.0);
      vertex14.texCoord = [1.0,1.0]


      var vertex15 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex15.texCoord = [0.0,0.0]


      var vertex16 = new Vertex(-shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      vertex16.texCoord = [0.0,1.0]




      var vertex17 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex17.texCoord = [0.0,1.0]

      var vertex18 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex18.texCoord = [0.0,0.0]



      var vertex19 = new Vertex(shapeSize+xMouse, -shapeSize+yMouse, 0.0);
      vertex19.texCoord = [1.0,1.0]

      var vertex20 = new Vertex(shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex20.texCoord = [1.0,0.0]





      var vertex21 = new Vertex( shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex21.texCoord = [1.0,0.0];
      var vertex22 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, -2*shapeSize);
      vertex22.texCoord = [0.0,0.0]
      var vertex23 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, -2*shapeSize);
      vertex23.texCoord = [0.0,1.0]
      var vertex24 = new Vertex( shapeSize+xMouse, shapeSize+yMouse, -2*shapeSize);
      vertex24.texCoord = [1.0,1.0]


      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex1);
      vertices.push(vertex4);
      vertices.push(vertex3);


      vertices.push(vertex5);
      vertices.push(vertex8);
      vertices.push(vertex7);
      vertices.push(vertex5)
      vertices.push(vertex8)
      vertices.push(vertex6)


      vertices.push(vertex9)
      vertices.push(vertex10)
      vertices.push(vertex11)
      vertices.push(vertex9)
      vertices.push(vertex12)
      vertices.push(vertex11)




      vertices.push(vertex13)
      vertices.push(vertex15)
      vertices.push(vertex16)
      vertices.push(vertex13)
      vertices.push(vertex14)
      vertices.push(vertex16)
  

      vertices.push(vertex18)
      vertices.push(vertex17)
      vertices.push(vertex19)



      vertices.push(vertex19)
      vertices.push(vertex20)
      vertices.push(vertex18)


      



      vertices.push(vertex21);
      vertices.push(vertex22);
      vertices.push(vertex23);
      vertices.push(vertex21);
      vertices.push(vertex24);
      vertices.push(vertex23);



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