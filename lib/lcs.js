const FunManager = require('./funmanager')
const Flow = require('./flow')
const ApiManager = require('./apimanager')

global.funManager = new FunManager()
global.apiManager = new ApiManager()

// 加载核心方法
require('./coreFun/index')
// 加载所有方法
require('../Fun/math')

const flowList = []

const createNewFLow = () => {
  flowList.push(new Flow())
  return flowList.length - 1
}

const addFlowNode = (flowIndex, funName, id) => {
  flowList[flowIndex].addFLow(funName, id)
}

const addNextNode = (flowIndex, curFlowId, nextFlowId) => {
  flowList[flowIndex].addNextNode(curFlowId, nextFlowId)
}

const startFlow = (flowIndex, startFlowId, inMsg) => {
  flowList[flowIndex].startFlow(startFlowId, inMsg)
}

const getOptions = (flowIndex, startFlowId) => {
  return flowList[flowIndex].getOptions(startFlowId)
}

const setMsg = (flowIndex, startFlowId, payload) => {
  flowList[flowIndex].setMsg(startFlowId, payload)
}

module.exports = {
  createNewFLow,
  addFlowNode,
  addNextNode,
  startFlow,
  getOptions,
  setMsg,
}


