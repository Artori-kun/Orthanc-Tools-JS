var express = require('express')
var app = express()
var cors = require('cors')

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'MTA-AdminMed',
      description: 'API description of MTA-AdminMed',
      contact: {
        name: 'Support team'
      }

    },
    servers: [
      {
        url: 'http://localhost:4000/api/'
      }
    ]
  },
  apis: ['./routes/index.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
app.use(cors())

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
