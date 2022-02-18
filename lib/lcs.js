const FunManager = require('./funmanager')
const Flow = require('./flow')

global.funManager = new FunManager()


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


let index = createNewFLow()
addFlowNode(index, 'double', 1)
addFlowNode(index, 'pow', 2)
addFlowNode(index, 'double', 3)
addNextNode(index, 2, 1)
addNextNode(index, 1, 3)
startFlow(index, 2, 3)


index = createNewFLow()
addFlowNode(index, 'double', 1)
addFlowNode(index, 'pow', 2)
addFlowNode(index, 'double', 3)
addNextNode(index, 1, 3)
addNextNode(index, 3, 2)
startFlow(index, 1, 3)
