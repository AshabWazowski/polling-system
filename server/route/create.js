
import express from 'express';
import { createPostEntry } from '../controller/PillingController.js';

const router = express.Router();

router.put("/create-poll", createPostEntry)

export default router;