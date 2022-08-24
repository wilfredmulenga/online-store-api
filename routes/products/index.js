import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()
const ref = firebase.database().ref('products')

router.get('/', function (req, res) {
    ref.on(
        'value',
        (snapshot) => {
            res.send(snapshot.val())
        },
        (errorObject) => {
            console.log('The read failed: ' + errorObject.name)
        },
    )
})

export default router
