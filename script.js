//##############################################################################
//## infdex                                                                   ##
//##############################################################################

//****various Linter configs****
// jshint esversion: 6
// jshint browser: true
// jshint node: true
// jshint -W097
"use strict";


const CURRENT_VERSION = 0.1;

var c;
var ctx;
var chunks;

function main(){
  indicateVersion(CURRENT_VERSION);

  c = document.getElementById("canvas");
  ctx = c.getContext("2d");

  chunks = new ChunkCollection();

  // ctx.font = "30px Consolas";
  // ctx.fillText("Hello World", 10, 50)
}

function indicateVersion(ver){
  let elements = document.getElementsByClassName("versionIndicator");
  for(let el of elements){
    el.innerHTML = `infdex v${ver}`;
  }
}

class ChunkCollection {
  constructor(params){
    switch(params.initDirection){
      case undefined:
        this.initDirection = 0; //right
        break;
      case "right":
        this.initDirection = 0; //right
        break;
      case "down":
        this.initDirection = 1; //down
        break;
      case "left":
        this.initDirection = 2; //left
        break;
      case "up":
        this.initDirection = 3; //up
        break;
    }
    this.chunklist = [];
  }

  setIndex(i, input){
    this.chunklist[i] = input;
  }

  neighbourIndex(index, direction, distance){
    //define all useful variables for finding your place in the spiral
    let prevHalfLoopLength        = Math.floor(Math.sqrt(index));
    let halfLoopLength            = Math.floor(Math.sqrt(index))+1;
    let currentHalfLoop           = prevHalfLoopLength^2;
    let nextHalfLoop              = halfLoopLength^2;
    let currentSpiralDirection;

    //find out what direction the current loop segment goes
    if(halfLoopLength % 2 != 0){
      if(currentHalfLoop+halfLoopLength > index){
        currentSpiralDirection = 1;
      } else {
        currentSpiralDirection = 0;
      }
    } else {
      if(currentHalfLoop+halfLoopLength > index){
        currentSpiralDirection = 3;
      } else {
        currentSpiralDirection = 2;
      }
    }
    currentSpiralDirection = (this.initDirection+currentSpiralDirection) % 4;

    let distanceFromLast = index-currentHalfLoop;
    switch(direction){

      case "right":
        direction = 0;
        //if current direction lines up with the desired one...
        //toooo complex. back to the drawing board
        if(currentSpiralDirection === direction){
            index += (nextHalfLoop-index)+1;

        }
        break;
      case "down":
        direction = 1;
        // let distanceFromLast = index-currentHalfLoop;

        break;
      case "left":
        direction = 2;
        // let distanceFromLast = index-currentHalfLoop;

        break;
      case "up":
        direction = 3;
        // let distanceFromLast = index-currentHalfLoop;

        break;
    }
  }


}
