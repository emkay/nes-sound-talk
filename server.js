const http = require('http')
const st = require('st')
const path = require('path')
const mount = st({ path: path.join(__dirname, '/static'), url: '/static' })

const server = http.createServer((req, res) => {
  const isStatic = mount(req, res)
  if (!isStatic) {
    res.setHeader('Content-Type', 'text/html')
    res.end('<!DOCTYPE html><html><head><link href="/static/css/main.css" rel="stylesheet" type="text/css"></head><body><script src="/static/js/bundle.js"></script></body></html>')
  }
})

server.listen(8000)
