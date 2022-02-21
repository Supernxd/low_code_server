// 路由模块， 添加一个路由

function Route() {
  this.init = function() {
    this.routeUrl = 'init'
  }

  this.setConfig = function(cfg) {
    this.routeUrl = cfg
  }

  this.run = function() {
    console.log(this.routeUrl)
  }

  this.end = function() {
    this.routeUrl = ''
  }
}

funManager.register('route', Route, {inCount: 0})

