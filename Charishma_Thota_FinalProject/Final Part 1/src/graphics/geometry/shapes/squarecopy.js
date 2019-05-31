/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {SquareCopy}
 */
class SquareCopy extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {SquareCopy} Triangle created
     */
    constructor(shader,r,g,b) {
        super(shader);
    //     this.mx = mouseX;
    //     this.my = mouseY;
    //     this.id = id;
    //     this.flag = 0;

    //     r = Math.random();
    //    g = Math.random();
    //    b = Math.random();

    //    if(id == 0){
    //     updateShape(2, r, g, b);
    // }
        
        this.vertices = this.generateTriangleVertices(r,g,b);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
        // this.speed = speed;
        // speed = 1.01*speed;
        //console.log(this.speed);
  
    //     this.downtranslationMatrix = new Matrix4();
    //   this.downtranslationMatrix.setTranslate(0,-this.speed,0);

    //   this.backTranslateMatrix = new Matrix4();
    //   this.backTranslateMatrix.setTranslate(0, 2, 0);
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(r,g,b) {
      var vertices = []
  
      const shapeSize = 0.1;
  
      var vertex1 = new Vertex( shapeSize+0.9, -shapeSize-0.9, 0.0, r, g, b);
      var vertex2 = new Vertex(-shapeSize+0.9, -shapeSize-0.9, 0.0, r, g, b);
      var vertex3 = new Vertex( -shapeSize+0.9,   shapeSize-0.9, 0.0, r, g, b);

      var vertex4 = new Vertex(-shapeSize+0.9, shapeSize-0.9, 0.0, r, g, b);
      var vertex5 = new Vertex( shapeSize+0.9, shapeSize-0.9, 0.0, r, g, b);
      var vertex6 = new Vertex( shapeSize+0.9, -shapeSize-0.9, 0.0, r, g, b);



      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
  
        return vertices;
     }
  
    //  render() {
       
    //     if(this.id == 0){
    //         this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
    //         yRafi -= this.speed;
    //         if(yRafi < -1){
    //             console.log("in here", yRafi);
    //             // this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
    //             // yRafi = 1;
                
    //             document.getElementById(lives--).style = "color:red; visibility: hidden";
    //             //lives--;
    //             if(lives == 0){
    //                 reset();
    //             } else {
    //                 if(this.flag == 0){
    //                     newRand(this.id);
    //                     this.id =6;
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
          
    //     // this.modelMatrix = this.modelMatrix.setTranslate(this.mx,this.my,0);
    //     this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
    //   }
  }