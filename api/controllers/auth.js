import { db } from "../connect.js"
import bcrypt from "bcryptjs";

export const register = (req,res)=>{
    //check user if exists
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username], (err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User account already exists!")
    //create new user
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt)
    //add user
    const q = "INSERT INTO users (username, email, password, nameFirst, nameLast) VALUES (?)";
    const values = [req.body.username, req.body.email, hashedPass, req.body.nameFirst, req.body.nameLast];
    db.query(q,[values], (err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
    });
    });
};

export const login = (req,res)=>{
    //TODO
}

export const logout = (req,res)=>{
    //TODO
}