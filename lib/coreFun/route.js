// 路由模块， 添加一个路由

class Route {
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

funManager.register('route', Route, {inCount: 0})

