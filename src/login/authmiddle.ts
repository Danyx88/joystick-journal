import {NextFunction, Request, Response } from "express"
import APIResponse from "./global"
import Status from "./global"
import { verifyJWT  } from "./auth"
import { db } from "./user.controller"

export const authmiddle = async (req:Request, res:Response, next:NextFunction)=>{
    try{
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
            const payload = await verifyJWT(req.headers.authorization)

            const found = db.findById(payload.id)
            if(found){
                delete found.password
                delete found.bank
                delete found.crypto

                req.user = found
                next()
            } else {
                res.status(401).send(new APIResponse(Status.ERROR, null, "User not found"))
            }
        } else  {
            res.status(401).send(new APIResponse(Status.ERROR, null, "Token not present or wrong"))
        }
    } catch (error){
        console.error(error)
        next(error)
    }
}

