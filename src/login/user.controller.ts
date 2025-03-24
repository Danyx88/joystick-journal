import { Router } from "express";
import Database from "./db"
import { generateJWT } from "./auth";
import APIResponse from "./global";
import Status from "./global"
import { authmiddle } from "./authmiddle";

export const user = Router()
export const db = new Database()

user.get("/me", authmiddle, async (req, res, next) => {
    try{
        res.send(new APIResponse(Status.SUCCESS, req.user))
    } catch (error){
        next(error)
    }
})

user.post("/login", async (req, res, next) => {
    try{
        const found = db.findByEmail(req.body.email)
        if(found) {
            if(found.password === req.body.email){
               const token = await generateJWT({email: found.email, id: found.id})
               delete found.password
               delete found.bank
               delete found.crypto
               res.send(new APIResponse(Status.SUCCESS, { token, user: found }))
            } else {
                res
                .status(401)
                .send(new APIResponse(Status.ERROR, null, "Wrong password"))
            }
        } else{
            res.status(404)
            .send(new APIResponse(Status.ERROR, null, "User not found"))
        } 
    } catch (error){
        console.log(error)
        next(error)
        }
})