import express from "express";
import { getUser } from "../controllers/user.js";
import {updateUsername} from "../controllers/user.js"

const router = express.Router()

router.post("/find/:userId", getUser)
router.post("/updateUsername", updateUsername)
export default router