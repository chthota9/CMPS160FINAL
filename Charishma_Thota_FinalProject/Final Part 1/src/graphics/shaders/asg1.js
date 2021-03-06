// Vertex Shader
var ASG2_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;

  void main() {
    v_Color = a_Color;
    gl_Position = a_Position;
  }`;

// Fragment Shader
var ASG2_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;

  void main() {
    gl_FragColor = v_Color;
  }`;
