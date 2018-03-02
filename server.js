const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler(), 
menu = require('./routes/menu')

app.prepare()
.then(() => {
  const server = express()

  // server.get('/gettask', (req, res) => {
  //   const actualPage = '/post'
  //   const queryParams = { id: req.params.id } 
  //   app.render(req, res, actualPage, queryParams)
  // })
  server.get('/getMenu',menu.getMenu)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000,'10.41.2.64', (err) => {
    if (err) throw err
    console.log('Ready on http://10.41.2.64:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})