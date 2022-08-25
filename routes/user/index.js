import express from 'express'
import admin from '../../firebase-service.cjs'

const router = express.Router()

router.post('/', async function (req, res) {
    try {
        const { email, password } = req.body
        const user = await admin.auth().createUser({
            email,
            password,
        })
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
})

export default router
