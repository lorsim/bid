import express from 'express'
const router = express.Router()
import { createBid, postBid } from '../controller/bidController.js'


router.route('/').post(createBid)
router.route('/:id').post(postBid)


export default router