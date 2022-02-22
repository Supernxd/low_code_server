const Koa = require('koa')
const koaBody = require('koa-body')
const serve = require('koa-static')
const mount = require('koa-mount');

const LCS = require('./lib/lcs')

// 启动flow 
require('./lib/lcs')

const port = 11111

const app = new Koa()

app.use(koaBody({
  jsonLimit: '1kb'
}))

// 静态文件添加
app.use(mount('/editBoard', serve(__dirname + '/public')))

app.use(async ctx => {
  // router(ctx)
  ctx.response.body = 'Hello, koa2!'
})

const { WebSocketServer } = require('ws')

const server = require('http').createServer(app.callback());

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  let index = LCS.createNewFLow()

  ws.on('message', (msg) => {
    const { code, data } = JSON.parse(msg)
    console.log(code, data)
    switch(code) {
      case 'addNextNode': {
        LCS.addNextNode(index, data.curId, data.nextId)
        break
      }
      case 'addFlowNode': {
        LCS.addFlowNode(index, data.name, data.id)
        break
      }
      case 'startFlow': {
        LCS.startFlow(index, data.id, data.num)
        break
      }
      case 'getOptions': {
        const values = LCS.getOptions(index, data.id)
        ws.send(JSON.stringify({code: 'getOptions', data: {id: data.id, name: data.name, values}}));
        break
      }
      case 'setMsg': {
        LCS.setMsg(index, data.id, data.payload)
        break
      }
    }
  });

  ws.send(JSON.stringify({code: 'allFun', data: funManager.getAllFun()}));
});

server.listen(port);
console.log(`服务启动成功, 地址: http://127.0.0.1:${port}`)
console.log(`页面编辑地址: http://127.0.0.1:${port}/editBoard/index.html`)