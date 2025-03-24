import express from "express";
import cors from "cors";
import { user } from "./user.controller"


const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", user)

const initAPI = () => {
    app.listen(process.env.PORT || 3001, () => {
        console.table(list(app))
    })
}

initAPI()

function list(app: any): any {
    throw new Error("Function not implemented.");
}
