import admin from '../firebase-service.cjs'
import express from 'express'

const router = express.Router()
/* GET users listing. */
const userRouter = router.get('/', async function (req, res) {
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
