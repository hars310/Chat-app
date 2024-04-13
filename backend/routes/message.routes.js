import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middlewares/protectRoute.js';

// Create a new router instance
const router = express.Router();

// Define a route to send a message
// This route is protected by the protectRoute middleware, which ensures the user is authenticated
router.post('/send/:id', protectRoute, sendMessage);

// route to get messages
router.get('/:id',protectRoute,getMessages);



// Export the router
export default router;
