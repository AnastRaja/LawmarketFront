import Web3 from 'web3'

export const getWeb3=()=> {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.xinfin.network"))
    if(localStorage.Authenticates){
      const privateKey = localStorage.Authenticates
      if (!privateKey) throw new Error('Private key not found in localStorage')
      const account = web3.eth.accounts.privateKeyToAccount(privateKey)
      web3.eth.accounts.wallet.add(account)
    }
    // await web3.eth.getAccounts() // this will load the accounts into the web3.eth.accounts.wallet
    return web3
  } catch (error) {
    console.error('Failed to get web3:', error)
  }
}

export const keys = () =>{
  if(localStorage.Authenticates){
    const privateKey = localStorage.Authenticates
    return privateKey
  }else{
    return null
  }
  
}

const exportedObject = {
  getWeb3,
  keys,
};


export default exportedObject
