import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()

router.get('/', async function (req, res) {
    const { userId } = req.query

    const ref = firebase.database().ref(`orders/${userId}`)

    const getData = () => {
        return new Promise((resolve, reject) => {
            ref.on(
                'value',
                (snapshot) => {
                    return resolve(snapshot.val())
                },
                (errorObject) => {
                    console.log('The read failed: ' + errorObject.name)
                },
            )
        })
    }

    try {
        const data = await getData()
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
})

export default router
