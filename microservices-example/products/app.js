// Dummy Products service, simple json object returns that represents products

const productsJson = [
    {
        id: "1",
        name: 'Avengers - infinity war11',
        description: 'a Blu-ray movie'
    },
    {
        id: "2",
        name: "Cheese Burger",
        description: "Food"
    }
]

const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => res.json(productsJson))
app.listen(port, () => console.log(`Example app listening on port port!`))

