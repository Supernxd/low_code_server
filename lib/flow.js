/**
 * 一个节点需要包含以下属性
 * type: 节点类型
 * inMsg: 一个输入对象
 * outMsg: 一个输出对象
 * runFun: 节点的方法
 */

class FlowNode {
  constructor(type, fun) {
    this.type = type;
    this.fun = fun
  }

  run(inMsg) {
    return this.fun(inMsg)
  }

}

class Flow {
  constructor() {
    this.flowMap = {}
  }

  // TODO id不应该传入
  addFLow(funName, id) {
    const { type, fun } = funManager.getFun(funName) 
    const flowNode = new FlowNode(type, fun)
    this.flowMap[id || Date.now()] = {
      flowNode,
      nextId: null,
    }
  }

  addNextNode(cueId, nextId) {
    this.flowMap[cueId].nextId = nextId 
  }

  startFlow(id, inMsg) {
    while(this.flowMap[id]) {
      inMsg = this.flowMap[id].flowNode.run(inMsg)
      id = this.flowMap[id].nextId
    }  
    
    console.log('flow end', inMsg)
  }
}

module.exports = Flow