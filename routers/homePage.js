const express = require("express")
const router = express.Router()

router.get('/',async(req,res)=>{
    res.send(`
        <html>
            <head>
                <title>Home Page</title>
            </head>
            <body>
                <h1>Welcome to the Home My Blog Page!</h1>
            </body>
        </html>
    `);
})

module.exports =router