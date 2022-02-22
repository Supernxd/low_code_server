/**
 * 一个节点需要包含以下属性
 * type: 节点类型
 * inMsg: 一个输入对象
 * outMsg: 一个输出对象
 * runFun: 节点的方法
 */

class FlowNode {
  constructor(type, node) {
    this.type = type
    this.node = new node()
  }

  run(inMsg) {
    return this.node.run(inMsg)
  }

  setMsg(payload) {
    this.node.update(payload)
  }

  end() {
    this.node.end()
  }

  getOptions() {
    try {
      return this.node.getOptions()
    } catch (error) {
      return {}
    }
  }
}

class Flow {
  constructor() {
    this.flowMap = {}
  }

  // TODO id不应该传入
  addFLow(funName, id) {
    const { type, node } = funManager.getFun(funName) 
    const flowNode = new FlowNode(type, node)
    this.flowMap[id || Date.now()] = {
      flowNode,
      nextId: null,
    }
  }

  addNextNode(curId, nextId) {
    this.flowMap[curId].nextId = nextId 
  }

  startFlow(id, inMsg) {
    while(this.flowMap[id]) {
      inMsg = this.flowMap[id].flowNode.run(inMsg)
      console.log('i', inMsg)
      id = this.flowMap[id].nextId
    }  
    
    console.log('flow end', inMsg)
  }

  getOptions(curId) {
    return this.flowMap[curId].flowNode.getOptions()
  }

  setMsg(curId, payload) {
    this.flowMap[curId].flowNode.setMsg(payload)
  }
}

module.exports = Flow