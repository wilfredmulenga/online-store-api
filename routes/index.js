import express from 'express'
const router = express.Router()

import userRouter from './user/index.js'
import usersRouter from './users/index.js'

router.use('/user', userRouter)
router.use('/users', usersRouter)

export default router
