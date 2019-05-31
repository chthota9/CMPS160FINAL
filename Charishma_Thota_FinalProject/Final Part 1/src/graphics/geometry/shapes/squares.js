/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Square}
 */
class Square extends Geometry {
    /**
     * Constructor for Square.
     *
     * @constructor
     * @param {Shader} shader Shading object used to shade geometry
     * @returns {Square} Triangle created
     */
    constructor(shader,mouseX,mouseY, flag, id) {
        super(shader);
        this.mx = mouseX;
        this.my = mouseY;
        this.flag = flag;
        this.id = id;
        console.log(this.speed);
        this.vertices = this.generateTriangleVertices(mouseX,mouseY);
        this.faces = {0: [0, 1, 2]};
        this.rot = 0;
        this.speed = speed;
        speed = 1.01*speed;
  
        this.downtranslationMatrix = new Matrix4();
      this.downtranslationMatrix.setTranslate(0,-this.speed,0);

      this.backTranslateMatrix = new Matrix4();
      this.backTranslateMatrix.setTranslate(0, 2, 0);
        this.interleaveVertices();
  
  
    }
  
    generateTriangleVertices(xMouse, yMouse) {
      var vertices = []
  
      const shapeSize = 0.1;

      var red = Math.random();
       var blue = Math.random();
       var green = Math.random();
  
      var vertex1 = new Vertex( shapeSize+xMouse, -shapeSize+yMouse, 0.0, red, blue, green);
      var vertex2 = new Vertex(-shapeSize+xMouse, -shapeSize+yMouse, 0.0, red, blue, green);
      var vertex3 = new Vertex( -shapeSize+xMouse,   shapeSize+yMouse, 0.0, red, blue, green);

      var vertex4 = new Vertex(-shapeSize+xMouse, shapeSize+yMouse, 0.0, red, blue, green);
      var vertex5 = new Vertex( shapeSize+xMouse, shapeSize+yMouse, 0.0, red, blue, green);
      var vertex6 = new Vertex( shapeSize+xMouse,   -shapeSize+yMouse, 0.0, red, blue, green);



      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
  
        return vertices;
     }
  
     render() {
       
        if(this.flag == 1){
            this.modelMatrix = this.modelMatrix.multiply(this.downtranslationMatrix);
            yRafi -= this.speed;
            if(yRafi < -1){
                this.modelMatrix = this.modelMatrix.multiply(this.backTranslateMatrix);
                yRafi = 1;
                document.getElementById(lives--).style = "color:red; visibility: hidden";
                //lives--;
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
          
        // this.modelMatrix = this.modelMatrix.setTranslate(this.mx,this.my,0);
        this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
      }
  }
  
  //    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
  //    console.log(this.modelMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
  //    this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);