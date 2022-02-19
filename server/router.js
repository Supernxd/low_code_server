const fs = require('fs')
const path = require('path')
const { reqCheck, getResponse } = require('./parser')

let apiList = []

function resParse(req) {
  const { method, path } = req
  const api = apiList.find(element => {
    return element.method.toLowerCase() == method.toLowerCase() && element.path.toLowerCase() == path.toLowerCase()
  })
  // 路由不存在返回404
  if (!api) return { status: 404 }
  // 请求头的检查
  const RuleFail = reqCheck(req, api.body, api.query)
  if (RuleFail) return RuleFail

  // 返回出参responseBody
  const { status, body, contentType, headers } = getResponse(api)
  
  return { status, body, contentType, headers }
}


// 初始化API路由
initApi()


module.exports = {
  restfulParser: resParse,
}

function router(ctx) {
  const { status, body, contentType, headers, message } = restfulParser(ctx.request)
  if(contentType) 
    ctx.type = contentType // 设置contentType
  if(headers) 
    ctx.set(headers) // 设置header
  // 设置status, message
  if(status)
    ctx.response.status = status
  if(message)
    ctx.response.message = message
  // 设置body
  if(body)
    ctx.body = body  
}



module.exports = router