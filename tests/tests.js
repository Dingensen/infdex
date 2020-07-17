//##############################################################################
//## infdex tests                                                             ##
//##############################################################################

//****various Linter configs****
// jshint esversion: 6
// jshint browser: true
// jshint node: true
// jshint -W097
"use strict";


QUnit.module('get index direction', function(){
  var chunks = new ChunkCollection({});
  QUnit.test("index directions", (assert)=>{
    assert.equal(chunks.idxDirection(1),3,"index 1 goes right");
    assert.equal(chunks.idxDirection(2),0,"index 2 goes down");
    assert.equal(chunks.idxDirection(3),1,"index 3 goes left");
    assert.equal(chunks.idxDirection(4),1,"index 4 goes left");
    assert.equal(chunks.idxDirection(5),2,"index 5 goes up");
    assert.equal(chunks.idxDirection(6),2,"index 6 goes up");

    assert.equal(chunks.idxDirection(36),1,"index 36 goes left");

    assert.equal(chunks.idxDirection(90),0,"index 90 goes down");
    assert.equal(chunks.idxDirection(42),2,"index 42 goes up")
  })

})

QUnit.module('get Neighbour Index', function(){
  var chunks = new ChunkCollection({});
  QUnit.test('Neighbour indices', (assert)=>{
    assert.equal(chunks.neighbourIdx(22,"right",4),26,"22 --4right--> 26");
    assert.equal(chunks.neighbourIdx(22,"right",5),51,"22 --5right--> 51");


  });
});
