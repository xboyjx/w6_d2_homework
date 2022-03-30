const Park = function(name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    const index = this.dinosaurCollection.indexOf(dinosaur)
    this.dinosaurCollection.splice(index,1)
}

Park.prototype.findDinosaurMostVisited = function() {
    let highest = 0
    let mostAttracted = "No dinosaurs in list"
    for(dinosaur of this.dinosaurCollection){
      if (dinosaur.guestsAttractedPerDay > highest){
        highest = dinosaur.guestsAttractedPerDay
        mostAttracted = dinosaur
      }
    }
    return mostAttracted
}

Park.prototype.findSameSpecies = function(dinosaurSpecies){
    let sameSpeciesList = []
    for(dinosaur of this.dinosaurCollection){
        if(dinosaur.species === dinosaurSpecies){
            sameSpeciesList.push(dinosaur)
        }
    }
    return sameSpeciesList
}

Park.prototype.visitorsPerDay = function(){
    let visitorsPerDay = 0
    for(dinosaur of this.dinosaurCollection){
        visitorsPerDay += dinosaur.guestsAttractedPerDay
    }
    return visitorsPerDay
}

Park.prototype.visitorsPerYear = function(){
    visitorsPerDay = this.visitorsPerDay()
    return visitorsPerDay * 365
}

Park.prototype.revenuePerYear = function(){
    visitorsPerYear = this.visitorsPerYear()
    return visitorsPerYear * this.ticketPrice
}



module.exports = Park;