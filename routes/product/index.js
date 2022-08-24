import express from 'express'
import firebase from '../../firebase-service.cjs'

const router = express.Router()
const ref = firebase.database().ref('products')

router.post('/', function (req, res) {
    try {
        const { category, description, image, price, title } = req.body

        const newProductRef = ref.push()
        newProductRef.set({
            category,
            id: newProductRef.key,
            description,
            image,
            price,
            title,
            rating: {
                count: 0,
                rate: 0,
            },
        })
    } catch (error) {
        console.log(error)
    }

    res.sendStatus(200)
})

export default router
