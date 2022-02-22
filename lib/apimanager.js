// route列表

class ApiManager {
  constructor() {
    this.list = []
  }

  addRouter(id, path, method) {
    this.list.push({
      method,
      path: path[0] === '/' ? path : '/' + path,
      ownId: id,
    })
  }

  findRouter(req) {
    const { method, path } = req
    const api = this.list.find(element => {
      return element.method.toLowerCase() == method.toLowerCase() && element.path.toLowerCase() == path.toLowerCase()
    })
    // 路由不存在返回404
    if (!api) return false
    
    return {id: api.id, payload: {body: api.body, query: api.query, header: req.header}}
  }

  setRouter(id, path, method) {
    this.removeRoute(id)
    this.addRouter(id, path, method)
  }

  removeRoute(id) {
    this.list.filter(item => item.id != id)
  }
  
}

module.exports = ApiManager