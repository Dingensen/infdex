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
    assert.equal(chunks.idxDirection(0),3,"index 1 goes right");
    assert.equal(chunks.idxDirection(1),0,"index 2 goes down");
    assert.equal(chunks.idxDirection(2),1,"index 3 goes left");
    assert.equal(chunks.idxDirection(3),1,"index 4 goes left");
    assert.equal(chunks.idxDirection(4),2,"index 5 goes up");
    assert.equal(chunks.idxDirection(5),2,"index 6 goes up");
    assert.equal(chunks.idxDirection(6),3,"index 6 goes right");


    assert.equal(chunks.idxDirection(24),3,"index 25 goes right")
    assert.equal(chunks.idxDirection(35),1,"index 36 goes left");
    assert.equal(chunks.idxDirection(89),0,"index 90 goes down");
    assert.equal(chunks.idxDirection(41),2,"index 42 goes up")

    assert.equal(chunks.idxDirection(25),0,"index 25 goes down")
    assert.equal(chunks.idxDirection(56),1,"index 56 goes left")
    assert.equal(chunks.idxDirection(100),2,"index 100 goes up")
    assert.equal(chunks.idxDirection(4002000),3,"index 4002000 goes right")


  })

})

QUnit.module('get Neighbour Index', function(){
  var chunks = new ChunkCollection({});
  QUnit.test('Neighbour indices', (assert)=>{
    assert.equal(chunks.neighbourIdx(22,"right",4),26,"22 --4right--> 26");
    assert.equal(chunks.neighbourIdx(22,"right",5),51,"22 --5right--> 51");


  });
});
