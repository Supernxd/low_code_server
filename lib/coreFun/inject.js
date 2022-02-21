// 注入模块，界面只能从这个节点开始流程

function Inject() {
  this.init = function() {
    this.msg = {}
  }

  this.setConfig = function(msg) {
    this.msg = msg
  }

  this.run = function() {
    return this.msg
  }

  this.end = function() {
    this.msg = {}
  }
}

funManager.register('inject', Inject, {inCount: 0, hasStartBtn: true})

