import express from 'express'
const router = express.Router()

import userRouter from './user/index.js'

router.use('/user', userRouter)

export default router
