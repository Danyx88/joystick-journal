import { sign, verify, process, err, rej, decode, JwtPayload } from "jsonwebtoken";
import APIResponse from "./global"
import Status from "./global"
import { configDotenv} from "dotenv"
import { IUser } from "./global";

configDotenv()
type JwtTokenPayload = Pick<IUser, "email" | "id">;


export const generateJWT = (payload: JwtTokenPayload) =>{
    return new Promise (( res, rej) => {
        sign(payload, process.env.JWT_SECRET as string, {expiresIn: "15 minutes"}, (err, token) => {
            if(err) rej(new APIResponse(Status.ERROR, null, err.message))
                else return res(token)
        })
    })
}

export const verifyJWT = (token: string) =>{
    return new Promise<JwtTokenPayload> ((res,rej)=>{
        const cleanToken = token.replace("Bearer ", "")
            verify (cleanToken, process.env.JWT_SECRET as string, (err, decoded) =>{
            if(err) rej(new APIResponse(Status.ERROR, null, err.message))
                else res(decoded as JwtTokenPayload)
            }) 
    })
}