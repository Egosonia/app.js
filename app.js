// import solana web3 functionalities
const {connection,
        publickeys,
         clusterApiUrl,
         Keypairs,
        LAMPORTS_PER_sol
    } = require ("@solana/web3.js");
// 86tgvffjxrdt644577786887998544yvdxcjlkftu6432f453g
    const publickey = process. argv
    
    
const airdrop = async ()  {
     const connection = new connection (clusterApiUrl)
     const fromAirDropSignature =await connection
     new Publickey (publickey),
     2 * LAMPORTS_PER_sol
 );
  await connection. confirmTransaction (fromAirDrop)
     
}

async function checkBalance () {
    const connection = new connection (clusterApiUrl)
    const balance = await connection . getBalance (
        new publickey (publickey)

    )
    console. log ('Balance', Balance / LAMPORTS_PER_sol)
}

const mainFunction = async () => {
    await airDrop ();
    await checkBalance ();
}

main (). then (). catch ();