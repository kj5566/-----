import { Router } from 'express'
import content from '../middleware/content.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'
import { jwt } from '../middleware/auth.js'
import { createEvent, getAllEvents, getEvent } from '../controllers/events.js'

const router = Router()

router.post('/', content('multipart/form-data'), jwt, admin, upload, createEvent)

router.get('/all', jwt, admin, getAllEvents)
router.get('/:id', getEvent)

export default router
