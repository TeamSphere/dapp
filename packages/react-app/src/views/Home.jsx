import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div>
      <div style={{ margin: 32 }}>
        Welcome to the Sphere DAPP
      </div>

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        Sphere coins available<span style={{ fontWeight: "bold", color: "green" }}> ({ethers.utils.formatEther(yourLocalBalance)})</span> 
      </div>
    </div>
  );
}

export default Home;
