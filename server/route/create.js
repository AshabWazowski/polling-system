
import express from 'express';
import { createPostEntry, getRegisteredPoll } from '../controller/PillingController.js';

const router = express.Router();

router.put("/create-poll", createPostEntry)
router.get("/registered", getRegisteredPoll)

export default router;