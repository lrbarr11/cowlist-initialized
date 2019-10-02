const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cows = require('../database/db.js')

app.use(express.static('./client/dist'))
app.use(bodyParser.json());

app.get('/cows', (req, res) => {
    cows.getCows()
    .then((data) => {
        console.log('WHO LET THE COWS OUT? WHO? WHO?')
        res.send(data)
    })
    .catch((err) => {
        console.error('the cows are lazy and wont get up ', err);
        res.sendStatus(500);
    })
})

app.post('/cows', (req, res) => {
    cows.newCow(req.body)
    .then((newCow) =>{ 
        console.log('baby cow born!', newCow);
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('miscarriage :( ) ', err)
        res.setStatus(500);
    })
})

app.delete('/cows', (req, res) => {
    cows.removeCow(req.body)
    .then(() => {
        console.log('cow ded :( ');
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('cow fought back and lives: ', err);
        res.sendStatus(500);
    })
})

app.put('/cows', (req, res) => {
    cows.cowMods(req.body)
    .then((newCow) => {
        console.log('your modded cow: ', newCow)
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('cow operation failed...', err)
        res.sendStatus(500)
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))