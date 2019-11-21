import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
 
  handleMouseMove = (event) => {
    let cordinates = [event.clientX, event.clientY]
    console.log(cordinates[0])
    drawChromeBoiAtCoords(cordinates[0], cordinates[1])
  }

  handleToggleCycling = (event) => {
    toggleCycling()
  }
  
  handleKeyPress = (event) => {
    if(event.key === 'a'){
      resize('+')
    } else if (event.key === 's'){
      resize('-')
    }
    
  }
  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
      
    )
  }
}
