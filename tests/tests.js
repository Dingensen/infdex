//##############################################################################
//## infdex tests                                                             ##
//##############################################################################

//****various Linter configs****
// jshint esversion: 6
// jshint browser: true
// jshint node: true
// jshint -W097
"use strict";

var QUnit;

QUnit.module('get index direction', function(){
  var c = new ChunkCollection({});
  QUnit.test("index directions", (assert)=>{
    assert.equal(c.idxDirection(0),3,"index 1 goes right");
    assert.equal(c.idxDirection(1),0,"index 2 goes down");
    assert.equal(c.idxDirection(2),1,"index 3 goes left");
    assert.equal(c.idxDirection(3),1,"index 4 goes left");
    assert.equal(c.idxDirection(4),2,"index 5 goes up");
    assert.equal(c.idxDirection(5),2,"index 6 goes up");
    assert.equal(c.idxDirection(6),3,"index 6 goes right");


    assert.equal(c.idxDirection(24),3,"index 25 goes right")
    assert.equal(c.idxDirection(35),1,"index 36 goes left");
    assert.equal(c.idxDirection(89),0,"index 90 goes down");
    assert.equal(c.idxDirection(41),2,"index 42 goes up")

    assert.equal(c.idxDirection(25),0,"index 25 goes down")
    assert.equal(c.idxDirection(56),1,"index 56 goes left")
    assert.equal(c.idxDirection(100),2,"index 100 goes up")
    assert.equal(c.idxDirection(4002000),3,"index 4002000 goes right")
  })
})

QUnit.module('get Neighbour Index', function(){
  var c = new ChunkCollection({});
  QUnit.test('move direction', (assert)=>{
    assert.equal(c.moveIdx(0,0),3,"move down from 0");
    assert.equal(c.moveIdx(0,1),5,"move left from 0");
    assert.equal(c.moveIdx(0,2),7,"move up from 0");
    assert.equal(c.moveIdx(0,3),1,"move right from 0");

    assert.equal(c.moveIdx(10,0),11,"move down from 10");
    assert.equal(c.moveIdx(10,1),1,"move left from 10");
    assert.equal(c.moveIdx(10,2),9,"move up from 10");
    assert.equal(c.moveIdx(10,3),27,"move right from 10");

  });

  QUnit.test('Neighbour indices', (assert)=>{
    // assert.equal(c.nearestNeighbours(0),[ 1, 2, 3, 4, 5, 6, 7, 8],"center") //center
    //
    // assert.equal(c.nearestNeighbours(33),[32,59,60,61,34,15,14,13],"bottom") //lower half
    // assert.equal(c.nearestNeighbours(22),[23, 8, 7, 6,21,44,45,46],"top") //upper half
    // assert.equal(c.nearestNeighbours(27),[52,53,28,11,10, 9,26,51],"right") //right half
    // assert.equal(c.nearestNeighbours(70),[41,40,69,106,107,108,71,42],"left") //left half
    //
    // assert.equal(c.nearestNeighbours(49),[82,83,50,25,48,79,80,81],"top right") //top right
    // assert.equal(c.nearestNeighbours(72),[73,42,71,108,109,110,111,112],"top left") //top left
    // assert.equal(c.nearestNeighbours(30),[55,56,57,58,31,12,29,54],"bottom right") //bottom right
    // assert.equal(c.nearestNeighbours(36),[35,62,63,64,65,66,37,16],"bottom left") //bottom left

    assert.equal(c.nearestNeighbours(0),[ 1, 3, 5, 7],"center") //center

    assert.equal(c.nearestNeighbours(33),[32,60,34,14],"bottom") //lower half
    assert.equal(c.nearestNeighbours(22),[23, 7,21,45],"top") //upper half
    assert.equal(c.nearestNeighbours(27),[52,28,10,26],"right") //right half
    assert.equal(c.nearestNeighbours(70),[41,69,107,71],"left") //left half

    assert.equal(c.nearestNeighbours(49),[82,50,48,80],"top right") //top right
    assert.equal(c.nearestNeighbours(72),[73,71,109,111],"top left") //top left
    assert.equal(c.nearestNeighbours(30),[55,57,31,29],"bottom right") //bottom right
    assert.equal(c.nearestNeighbours(36),[35,63,65,37],"bottom left") //bottom left



  });
});
