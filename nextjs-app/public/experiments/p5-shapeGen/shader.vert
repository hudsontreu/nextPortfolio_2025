#ifdef GL_ES
precision mediump float;
#endif

attribute vec3 aPosition;

void main() {
  gl_Position = vec4(aPosition, 1.0);
}