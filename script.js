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
//     -----------------------------------------
//     | 42   43   44   45   46   47   48   49 |
//     |    -------------------------------    |
//     | 41 | 20   21   22   23   24   25 | 50 |
//     |    |    ---------------------    |    |
//     | 40 | 19 |  6    7    8    9 | 26 | 51 |
//     |    |    |    -----------    |    |    |
//     | 39 | 18 |  5 |  0    1 | 10 | 27 | 52 |
//     |    |    |    ------    |    |    |    |
//     | 38 | 17 |  4    3    2 | 11 | 28 | 53 |
//     |    |    ----------------    |    |    |
//     | 37 | 16   15   14   13   12 | 29 | 54 |
//     |    --------------------------    |    |
//     | 36   35   34   33   32   31   30 | 55 |
//     | ----------------------------------    |
//       ..   62   61   60   59   58   57   56 |
//     -----------------------------------------

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
    let hlfLoopLength = Math.floor(Math.sqrt(index));
    let idxHalfLoop = (hlfLoopLength)**2

    //if the index is uneven, it is either down or left
    if(idxHalfLoop % 2 != 0){
      if(idxHalfLoop + hlfLoopLength > index){ //check for down
        return 0;
      } else {
        return 1;
      }
    }else{ //if it's even it's gonna be up or right
      if(idxHalfLoop + hlfLoopLength > index){ //check for up
        return 2;
      } else {
        return 3;
      }
    }


  }


}
