import { JsonWebTokenError } from "jsonwebtoken";
import {db} from "../connect.js"

export const getPosts = (req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in.")

    JsonWebTokenError.verify
    const q = "SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userID) JOIN relationships AS r ON (p.userID = r.followedUserId AND r.followerUserId = ?";

    db.query(q, (err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}