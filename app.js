const express = require('express')
require("./Src/Config/MongoConection")
const Route = require('./Src/Routes/route')
const app = express()
const port = 2177


// app.use(mongoConnection)
app.use(express.json())
app.use('/api', Route)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))