import express from 'express'
const router = express.Router()

import userRouter from './user/index.js'
import usersRouter from './users/index.js'
import productsRouter from './products/index.js'

router.use('/user', userRouter)
router.use('/users', usersRouter)
router.use('/products', productsRouter)

export default router
