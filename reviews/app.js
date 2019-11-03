const reviewJson = [
    {
        id: "2",
        title: 'Oh snap what an ending',
        grade: 5,
        comment: 'I need therapy after this...',
        product: 1
    }
]

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.json(reviewJson))

app.listen(port, () => console.log(`Example app listening on port port!`))