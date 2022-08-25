import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()
const ref = firebase.database().ref('orders')

router.post('/', function (req, res) {
    try {
        const { userId, productId } = req.body

        const newOrderRef = ref.push()
        newOrderRef.set({
            userId,
            productId,
        })
    } catch (error) {
        console.log(error)
    }

    res.sendStatus(200)
})

export default router
