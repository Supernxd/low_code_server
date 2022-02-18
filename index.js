const Koa = require('koa')
const koaBody = require('koa-body')
const serve = require('koa-static')
const mount = require('koa-mount');

// 启动flow 
require('./lib/lcs')

const port = 11111

const app = new Koa()

app.use(koaBody({
  jsonLimit: '1kb'
}))

// 静态文件添加
app.use(mount('/editBoard', serve(__dirname + '/public')))

// app.use(async ctx => {
//   // router(ctx)
// })


app.listen(port)
console.log(`服务启动成功, 地址: http://127.0.0.1:${port}`)
console.log(`页面编辑地址: http://127.0.0.1:${port}/editBoard/index.html`)