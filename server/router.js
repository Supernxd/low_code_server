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