//##############################################################################
//## infdex tests                                                             ##
//##############################################################################

//****various Linter configs****
// jshint esversion: 6
// jshint browser: true
// jshint node: true
// jshint -W097
"use strict";

var chunks = new ChunkCollection({});

QUnit.module('get Neighbour Index', function(){
  QUnit.test('circular Neighbour indices', (assert)=>{
    assert.equal(chunks.neighbourIndexCircular(1,"cc",5),1,"edge case: counterclockwise rotation on index 1");
    assert.equal(chunks.neighbourIndexCircular(1,"c",3),4,"clockwise rotation from 1 by 3");

  });
});
