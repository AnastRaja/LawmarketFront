// import web3 from "web3";
import {getWeb3} from "./getWeb3";
import axios from "axios";
import { ethers } from "ethers";
// import Web3 from 'xdc3'
import { LAWBLOCKS_CONTRACT } from "../helper/constant";
import LawContract from '../helper/lawblocks.json'
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// const web3j = new Web3(new Web3.providers.HttpProvider("https://rpc.xinfin.network"))
// const lawContractj = new web3j.eth.Contract(
//   LawContract,
//   LAWBLOCKS_CONTRACT
// );

var web3js = getWeb3()

export const convertTokens = async (n) => {
  var b = new web3js.utils.BN(web3js.utils.toWei(n.toString(), 'ether'));
  return b;
}
const expectedBlockTime = 1000;

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
export const getTxnStatus = async (txHash) => {
  let transactionReceipt = null
  while (transactionReceipt == null) { // Waiting expectedBlockTime until the transaction is mined
    try {
      // transactionReceipt = await web3j.eth.getTransactionReceipt(txHash);
      await sleep(expectedBlockTime)
    } catch (error) {
    }
  }
  if(transactionReceipt != null){
    if (transactionReceipt.status) {
      return [txHash, true, transactionReceipt.blockNumber];
    } else {
      return [txHash, false, 0];
    }
  }
} 


export const eventsdata = async (contract, block) => {
  //   fromBlock: block,
  // }))
  // return await new Promise(resolve => {
  //   lawContractj.events.contractStored({
  //     fromBlock: block,
  //   }, function (error, event) {
  //     let cidvalue = event.returnValues[0];
  //     resolve(cidvalue)
  //   })
  // })


}




const sendRequest = async (url) => {

  return new Promise((resolve, reject) => {
    const request = (retries) => {
      // Make the HTTP request
      axios.get(url).then((res) => {
        // Check some condition based on response
        // Check number of retries left
        if (!res.data.status) {
          request(--retries);
        } else {
          return resolve(res.data);
        }
      }).catch((error) => {
        reject(error);
      });
    };
    request(5);
  });
};