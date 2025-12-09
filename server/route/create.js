
import express from 'express';
import { createPostEntry, getRegisteredPoll, postRegisteredPoll, viewResult } from '../controller/PillingController.js';

const router = express.Router();

router.put("/create-poll", createPostEntry)
router.get("/registered", getRegisteredPoll)
router.get("/view-result", viewResult)
router.post("/register-vote", postRegisteredPoll)

export default router;