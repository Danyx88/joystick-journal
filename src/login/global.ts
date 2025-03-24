export interface IUser{
    id: string
    email: string
    username?: string
    password?: string
    bank?: Bank
    crypto?: Crypto
}

interface Bank {
    cardEpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

interface Crypto{
    coin: Coin
    wallet: Wallet
    network: Network
}

enum Coin{
    Bitcoin = "Bitcoin",
}

enum Network {
    EthereumERC20 = "Ethereum (ERC20)",
}

enum Wallet {
    the0Xb5tb49834gy4erguyn8g486tg8ttgehgv8ebg8t4 = "jhtrtgh7hehvgmheh9svg9hvwefij8hc47h"
}

type Status = "ERROR" | "SUCCESS"
class APIResponse{
    data: any
    status: Status
    message?: string
    static ERROR: Status;
    static SUCCESS: Status;

    constructor(Status: Status, data: any, message?: string){
        this.status = Status;
        this.data=data;
        this.message=message
    }
}

export default APIResponse



declare namespace Express {
    interface Request{
        user: Omit<IUser, "password" | "crypto" | "bank">
    }
}