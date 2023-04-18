import express from "express";
import { getPosts } from "../controllers/post.js";

const router = express.Router()

router.post("/", getPosts)

export default router