// 注入模块，界面只能从这个节点开始流程

class Inject {
  static options = {
    msg: { name: '输入值' }
  }

  constructor() {
    this.payload = {
      msg: ''
    }
  }

  update({ msg }) {
    this.payload.msg = +msg
  }

  run() {
    return this.payload.msg
  }

  end() {
    this.payload.msg = ''
  }

  getOptions() {
    return this.payload
  }
}

funManager.register('inject', Inject, {inCount: 0, hasStartBtn: true})

