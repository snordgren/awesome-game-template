import createGame from 'create-game';
import React from 'react';
import ReactDOM from 'react-dom';
import { createSpriteBatch } from 'spritebatch';

import App from './components/App';

const canvas = document.getElementById('canvas');
const root = document.getElementById('root');
let spriteBatch; // the sprite 

createGame({
  create: (gl) => {
    spriteBatch = createSpriteBatch(gl, gl.drawingBufferWidth, gl.drawingBufferHeight);
    ReactDOM.render(<App />, root);
  },

  render: (gl) => {
    gl.clearColor(0.9, 0.9, 0.9, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    spriteBatch.begin();
    // render sprites here
    spriteBatch.end();
  },

  update: () => {
    // update your game state here
  },

  onResize: (gl) => {
    spriteBatch.resize(canvas.width, canvas.height);
  }
}, {
  canvas: canvas
});
