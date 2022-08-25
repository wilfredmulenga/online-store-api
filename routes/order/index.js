import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()

router.post('/', function (req, res) {
    try {
        const payload = req.body
        const ref = firebase.database().ref(`orders/${payload.userId}`)

        const newOrderRef = ref.push()
        newOrderRef.set({
            ...payload,
        })
    } catch (error) {
        console.log(error)
    }

    res.sendStatus(200)
})

export default router
