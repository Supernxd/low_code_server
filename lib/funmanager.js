class FunMangager {
  constructor() {
    this.list = {}
  }

  register(funName, fun, type='customer') {
    this.list[funName] = {
      type,
      fun,
    }
  }

  getFun(funName) {
    return this.list[funName]
  }
}

module.exports = FunMangager