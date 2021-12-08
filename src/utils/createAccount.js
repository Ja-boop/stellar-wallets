import { Keypair } from "stellar-sdk";
import sjcl from "sjcl";
import axios from "axios";

export default async function createAccount (pincode, password, name) {
    const pair = Keypair.random()

    await axios(
        `https://friendbot.stellar.org?addr=${pair.publicKey()}`
    ).then(() => {console.log('OK')})

    const account = {
        secret: sjcl.encrypt(pincode, pair.secret()),
        publicKey: pair.publicKey(),
        password: sjcl.encrypt(pincode, password),
    }

    localStorage.setItem( name, JSON.stringify(account) )

};
