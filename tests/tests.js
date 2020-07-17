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
  QUnit.test('Neighbour indices', (assert)=>{
    assert.equal(chunks.neighbourIndex(22,"right",4),26,"22 --4right--> 26");
    assert.equal(chunks.neighbourIndex(22,"right",5),51,"22 --5right--> 51");


  });
});
