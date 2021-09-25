const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const productsRouter = require('./routes/api/products')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/products', productsRouter);

// api/product
app.use((req, res) => {
  res.status(404).json({ 
    status: "error",
    message: 'Not found' 
  })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message })
});

module.exports = app
