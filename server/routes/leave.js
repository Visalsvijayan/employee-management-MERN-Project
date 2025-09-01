import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import {addLeave,listLeave,adminLeaveManagement,adminLeaveView} from '../controllers/leaveController.js'
const router=express.Router();
router.post('/add',authMiddleware,addLeave)
router.get('/:userId',authMiddleware,listLeave)
router.get('/',authMiddleware,adminLeaveManagement)
router.get('/view/:id',authMiddleware,adminLeaveView)
export default router