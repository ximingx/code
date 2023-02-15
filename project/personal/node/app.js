const express = require('express')
const app = express()
const listen = 3000

app.use(express.static('public'))

app.listen(listen, () => {
    console.log(`http://localhost:${listen}`)
})
