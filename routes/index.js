import express from 'express'
const router = express.Router()

import productRouter from './product/index.js'
import productsRouter from './products/index.js'
import userRouter from './user/index.js'
import usersRouter from './users/index.js'

router.use('/product', productRouter)
router.use('/products', productsRouter)
router.use('/user', userRouter)
router.use('/users', usersRouter)

export default router
