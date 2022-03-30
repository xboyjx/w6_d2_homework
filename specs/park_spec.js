const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  beforeEach(function () {
    park = new Park("Park 1", 5)
    dinosaurTRex = new Dinosaur("T-Rex", "Carnivore", 10)
    dinosaurTriceratops = new Dinosaur ("Triceratops", "Carnivore", 5)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, "Park 1")
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 5)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection
    assert.deepEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaurTRex)
    const actual = park.dinosaurCollection
    assert.deepEqual(actual, [dinosaurTRex])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaurTRex)
    park.removeDinosaur(dinosaurTRex)
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTriceratops)
    mostVisited = park.findDinosaurMostVisited()
    assert.strictEqual(dinosaurTRex, mostVisited)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTriceratops)
    sameSpeciesList = park.findSameSpecies("T-Rex")
    assert.deepStrictEqual(sameSpeciesList, [dinosaurTRex, dinosaurTRex])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTriceratops)
    visitorsPerDay = park.visitorsPerDay()
    assert.strictEqual(visitorsPerDay, 25)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTriceratops)
    const visitorsPerYear = park.visitorsPerYear()
    assert.strictEqual(visitorsPerYear, (25*365))
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTRex)
    park.addDinosaur(dinosaurTriceratops)
    const revenuePerYear = park.revenuePerYear()
    assert.strictEqual(revenuePerYear, 45625 )
  });

});
