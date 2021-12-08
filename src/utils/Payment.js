// import albedo from "@albedo-link/intent";

// export default function payment(amount, destination, asset_issuer) {
//     albedo.pay({
//         amount,
//         destination,
//         asset_code: 'TST',
//         asset_issuer,
//         network: 'testnet'

//     })
//     .then(res => console.log(res))
//     .catch(e => console.error(e))
// }

// import * as StellarSdk from 'stellar-sdk';
// let server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// let transaction;

// export default function payment (amount, destination, secret) {
//     const sourceKeys = StellarSdk.Keypair.fromSecret(secret);

//     server
//     .loadAccount(destination)
//     .catch((e) => {
//         if (e instanceof StellarSdk.NotFoundError) {
//             throw new Error("The destination account does not exist")
//         } else return e;
//     })
//     .then(() => {
//         return server.loadAccount(sourceKeys.publicKey());
//     })
//     .then((sourceAccount) => {
//         transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
//             fee: StellarSdk.BASE_FEE,
//             networkPassphrase: StellarSdk.Networks.TESTNET,
//         })
//             .addOperation(
//                 StellarSdk.Operation.payment({
//                     destination,
//                     asset: StellarSdk.Asset.native(),
//                     amount,
//                 }),
//             )
//             .addMemo(StellarSdk.Memo.text("Transaction test"))
//             .setTimeout(180)
//             .build();
//         transaction.sign(sourceKeys);
//         return server.submitTransaction(transaction);
//     })
//     .then((result) => {
//         console.log("Success! Results:", result);
//     })
//     .catch((e) => {
//         console.error("Something went wrong!", e);
//     });
// }

// const retrievePublicKey = async () => {
//     let publicKey = "";
//     let error = "";

//     try {
//         publicKey = await window.freighterApi.getPublicKey();
//     } catch (e) {
//         error = e;
//     }

//     if (error) {
//         return error;
//     }

//     return publicKey;
// };

// const retrieveNetwork = async () => {
//     let network = "";
//     let error = "";
  
//     try {
//       network = await window.freighterApi.getNetwork();
//     } catch (e) {
//       error = e;
//     }
  
//     if (error) {
//       return error;
//     }
  
//     return network;
// };

export default async function payment() {
    // if (window.freighterApi.isConnected()) {
    //     alert("User has Freighter!");
    // }
    
    // const result = await retrievePublicKey();
    // const resultNetwork = await retrieveNetwork();
    // console.log(result);
    // console.log(resultNetwork);

    
};
