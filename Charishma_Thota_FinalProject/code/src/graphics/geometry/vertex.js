/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Lucas N. Ferreira
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z) {
      this.point    = new Vector3([x, y, z]);

      
      
      const buttonTypeVal = document.getElementById("buttonColorType").innerHTML

      if(buttonTypeVal == "Solid") {
        var redSlider = document.getElementById("redSlider").value/100;
        var greenSlider = document.getElementById("greenSlider").value/100;
        var blueSlider = document.getElementById("blueSlider").value/100;
        this.color  = [redSlider, greenSlider, blueSlider, 1.0];
      } else if(buttonTypeVal == "Rainbow") {
        var redSlider = Math.random()
        var greenSlider = Math.random()
        var blueSlider = Math.random()
        this.color  = [redSlider, greenSlider, blueSlider, 1.0];
        // this.color = [1.0, 0.0, 0.0, 1.0];
      }

      
      
      this.texCoord = [0.0, 0.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
