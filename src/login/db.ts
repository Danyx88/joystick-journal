import { readFileSync } from "fs";
import { join } from "path";
import { IUser } from "./global";

class Database{
    users?: IUser[]

    constructor(){
        this.users = JSON.parse(
            readFileSync(join(__dirname, "src/login/db.json"), "utf-8")
        )
    }

    findById(id: string){
        return this.users!.find((user) => user.id === id)
    }
    findByEmail(email: string){
        return this.users!.find((user) => user.email === email)
    }
}

export default Database