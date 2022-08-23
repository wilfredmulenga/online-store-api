import express from 'express'
import admin from '../../firebase-service.cjs'

const router = express.Router()

const userRouter = router.post('/', async function (req, res) {
    try {
        const user = await admin.auth().createUser({
            email: 'wilfred.mulenga@yahoo.com',
            password: '111111',
        })
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})

export default userRouter
