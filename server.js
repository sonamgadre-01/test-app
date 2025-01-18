const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello from the node-app server"
    })
})


app.listen(8086, () => console.log(`Server is running on port 8086`))