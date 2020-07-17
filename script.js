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
        this.initDirection = 3; //right
        break;
      case "right":
        this.initDirection = 3; //right
        break;
      case "down":
        this.initDirection = 0; //down
        break;
      case "left":
        this.initDirection = 1; //left
        break;
      case "up":
        this.initDirection = 2; //up
        break;
    }
    this.chunklist = [];
  }

  setIdx(i, input){
    this.chunklist[i] = input;
  }

  idxDirection(index){
    let hlfLoopLength = Math.floor(Math.sqrt(index))+1;
    let idxHalfLoop = (hlfLoopLength-1)**2
    console.log({hlfLoopLength,idxHalfLoop})

    //if the index is uneven, it is either down or left
    if(idxHalfLoop % 2 != 0){
      console.log(`cd1 ${index}`)
      console.log(`idx ${idxHalfLoop}`)
      if(idxHalfLoop + hlfLoopLength >= index){ //check for down
        return 0;
      } else {
        return 1;
      }
    }else{ //if it's even it's gonna be up or right
      console.log(`cd2 ${index}`)
      console.log(`idx ${idxHalfLoop}`)

      if(idxHalfLoop + hlfLoopLength >= index){ //check for down
        return 2;
      } else {
        return 3;
      }
    }


  }


}
