import React from 'react';
import * as StellarSdk from 'stellar-sdk';

const StellarWallet = () => {
    return (
        <h1>
            {StellarSdk ? "The StellarSdk is ready to rock 🤘"
                : "Uh oh, the StellarSdk is missing 😱"
            }
        </h1>
    )
}

export default StellarWallet;
