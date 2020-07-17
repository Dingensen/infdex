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
  constructor(){
    this.chunklist = [];
  }

  setIndex(i, input){
    this.chunklist[i] = input;
  }

  neighbourIndex(currentIndex, direction, ){}

}
