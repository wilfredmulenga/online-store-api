import express from 'express'
const router = express.Router()

/* GET home page. */
const indexRouter = router.get('/', function (req, res) {
    res.render('index', { title: 'Express' })
})

export default indexRouter
