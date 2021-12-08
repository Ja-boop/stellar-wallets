import React, { useState } from 'react';
import './StellarPrompt.css'
import createAccount from '../utils/createAccount';
import payment from '../utils/Payment';

const CreateAccount = () => {
    const [pincode, setPincode] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="create-prompts-container">
            <p>Insert Pincode</p>
            <input name="pincode" type="number" value={pincode} onChange={event => setPincode(event.target.value)} ></input>

            <p>Insert Password</p>
            <input name="password" type="string" value={password} onChange={event => setPassword(event.target.value)} ></input>
            <button onClick={() => { createAccount(pincode, password, "Viktor") }} >Create Account</button>
        </div>
    )
};

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [destination, setDestination] = useState('');
    const [secret, setSecret] = useState('');

    return (
        <div className="create-prompts-container">
            <p>Amount</p>
            <input name="pincode" type="string" value={amount} onChange={event => setAmount(event.target.value)} ></input>
            <p>Destination</p>
            <input name="pincode" type="string" value={destination} onChange={event => setDestination(event.target.value)} ></input>
            <p>Secret</p>
            <input name="pincode" type="string" value={secret} onChange={event => setSecret(event.target.value)} ></input>
            <button onClick={() => { payment() }} >Submit</button>
        </div>
    )
};

const StellarPrompt = () => {
    return (
        <>
            <Payment />
            <CreateAccount />
        </>
    )
}

export default StellarPrompt;
