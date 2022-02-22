class double {
  static options = {
    num: { name: '乘法系数' }
  }

  constructor() {
    this.payload = {
      num: 2
    }
  }

  update({ num }) {
    this.payload.num = +num
  }

  run(n) {
    return n*this.payload.num
  }

  end() {

  }

  getOptions() {
    return this.payload
  }
}

class pow {
  static options = {
    num: { name: '指数系数' }
  }

  constructor() {
    this.payload = {
      num: 2
    }
  }

  update({ num }) {
    this.payload.num = +num
  }

  run(n) {
    return n**this.payload.num
  }

  end() {

  }

  getOptions() {
    return this.payload
  }
}


funManager.register('double', double)
funManager.register('pow', pow)
