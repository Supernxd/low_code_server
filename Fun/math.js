
function double() {
  this.init = function() {
    this.num = 2
  }

  this.update = function(num) {
    this.num = num
  }

  this.run = function(n) {
    return n*this.num
  }

  this.end = function() {

  }
}

function pow() {
  this.init = function() {
    this.num = 2
  }

  this.update = function(num) {
    this.num = num
  }

  this.run = function(n) {
    return n**this.num
  }

  this.end = function() {
    
  }
}


funManager.register('double', double)
funManager.register('pow', pow)
