const firebase = require('firebase-admin')

const credentials = require('./credentials.json')

firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL: 'https://velo-137f9-default-rtdb.firebaseio.com',
})

module.exports = firebase
