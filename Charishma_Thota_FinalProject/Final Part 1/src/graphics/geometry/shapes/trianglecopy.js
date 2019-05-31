/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {TriangleCopy}
 */
class TriangleCopy extends Geometry {
    /**
     * Constructor for Triangle.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {TriangleCopy} Triangle created
     */
    constructor(shader,r,g,b) {
        super(shader);
  
    //     this.mx = mouseX;
    //     this.my = mouseY;
    //     this.speed = speed;
    //     this.id = id;
    //     this.flag = 0;
    //     //console.log(this.speed);

    //     r = Math.random();
    //    g = Math.random();
    //    b = Math.random();

    //    if(id == 0){
    //     updateShape(1, r, g, b);
    // }

    //     speed = 1.01 * speed;

        this.vertices = this.generateTriangleVertices(r,g,b);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;

    //   this.downtranslationMatrix = new Matrix4();
    //   this.downtranslationMatrix.setTranslate(0,-this.speed,0);

    //   this.backTranslateMatrix = new Matrix4();
    //   this.backTranslateMatrix.setTranslate(0, 2, 0);
  
          this.scalingUp = true;
        // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(r,g,b) {
      var vertices = []
      const shapeSize = 0.1;
  
      var vertex1 = new Vertex( -shapeSize+0.9, shapeSize+-0.9, 0.0, r, g, b);
      var vertex2 = new Vertex(shapeSize+0.9, shapeSize+-0.9, 0.0, r, g, b);
      var vertex3 = new Vertex( 0.9, -shapeSize+-0.9, 0.0, r, g, b);
  
  
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      return vertices;
     }
  
    //  render() {
    //     //console.log(this.modelMatrix);

    //     if(this.id == 0){
    //         this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
    //         yRafi -= this.speed;
    //         if(yRafi < -1){
    //             console.log("in here", yRafi)
                
    //             // this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
    //             // yRafi = 1;
    //             document.getElementById(lives--).style = "color:red; visibility: hidden";
    //             //lives--;
    //             if(lives == 0){
    //                 reset();
    //             } else {
    //                 if(this.flag == 0){
    //                     newRand(this.id);
    //                     this.id = 6;
    //                     this.flag = 1;
    //                 }
    //             }
    //         }
    //     } else {
    //         this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
    //         this.my -= this.speed;
    //         if(this.my < -1){
    //             if(this.flag == 0){
    //                 newRand(this.id);
    //                 this.flag = 1;
    //             }
                
    //         }
    //     }
        




    //     this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
    //   }
  }