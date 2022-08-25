import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()

router.get('/', function (req, res) {
    const { userId } = req.query

    const ref = firebase.database().ref(`orders/${userId}`)
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
