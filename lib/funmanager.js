// 节点
const defaultOptions = {
  type: 'customer', // 方法类的类型
  node: '', // 注册的方法类
  inCount: 1, // 输入桩数量
  outCount: 1, // 输出桩数量
  hasStartBtn: false, // 是否在流程图上有流程开始按钮
}

class FunMangager {
  constructor() {
    this.list = {}
  }

  register(funName, node, options={}) {
    this.list[funName] = {
      ...defaultOptions,
      ...options,
      node,
    }
  }

  getFun(funName) {
    return this.list[funName]
  }

  getAllFun() {
    const newList = {}
    for(const [key, value] of Object.entries(this.list)) {
      newList[key] = {
        ...value,
        node: {
          options: value.node.options || {}
        }
      }
    }
    return newList
  }
}

module.exports = FunMangager