import { ethers } from "ethers";
import { useEffect, useState } from "react";
import SimpleWalletABI from "./abi/SimpleWallet.json";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

function App() {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask.");
    }
  };

  const handleDeposit = () => {
    alert(`Depositing ${amount} ETH...`);
  };

  const handleWithdraw = () => {
    alert(`Withdrawing ${amount} ETH...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md p-8 text-white glass-ui">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400 drop-shadow">
          💰 Simple Wallet
        </h1>

        {account ? (
          <div className="text-center mb-4">
            <p className="text-sm text-gray-300">Connected wallet:</p>
            <p className="text-md font-mono break-words text-lime-300">
              {account}
            </p>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all font-semibold shadow-md"
          >
            Connect Wallet
          </button>
        )}

        <div className="space-y-4 mt-6">
          <input
            type="number"
            placeholder="Enter amount in ETH"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <button
            onClick={handleDeposit}
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-all font-semibold shadow-md"
          >
            Deposit
          </button>

          <button
            onClick={handleWithdraw}
            className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-all font-semibold shadow-md"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
