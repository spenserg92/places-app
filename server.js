////////////////////
//Import Dependencies//
//////////////////////

const express = require('express')
require('dotenv').config() // import/load ENV variables
const path = require('path') // import path module


///Import Routers///



///Create the app object///

const app = express()

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/// Middleware ///


/// Routes ///

app.get('/', (req, res) => {
    res.send('the app is connected')
})

/// Server Listener ///
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log ('server is running')
})

/// End