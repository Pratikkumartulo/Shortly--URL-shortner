import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { getUsersAllUrls } from '../controller/urls.controller.js';

const router = express.Router();

router.get('/urls',authMiddleware,getUsersAllUrls)

export default router;