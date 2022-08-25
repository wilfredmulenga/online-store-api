import express from 'express'
import admin from '../../firebase-service.cjs'

const router = express.Router()

router.get('/', async function (req, res) {
    const allUsers = []

    const listAllUsers = async (nextPageToken) => {
        const res = await admin.auth().listUsers(1000, nextPageToken)
        allUsers.push(...res.users)
        if (res.pageToken) {
            await listAllUsers(res.pageToken)
        }
    }

    await listAllUsers()
    return res.json(allUsers)
})

export default router
