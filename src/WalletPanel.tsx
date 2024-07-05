import React from 'react';
import { Token } from './types/Token';

export interface WalletPanelProps {
  address: string;
  onDisconnect: () => void; 
  tokens: Token[];
}

const WalletPanel: React.FC<WalletPanelProps> = ({ address, onDisconnect, tokens }) => {
    return (
    <div className="w-[360px] h-[640px] bg-[#1F2532] text-white font-roboto">
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#0093E9] to-[#80D0C7]">
        <span className="font-bold">My wallet</span>
        <i className="fas fa-times"></i> 
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="truncate">{address}</span>
          <button className="text-pink-500" onClick={onDisconnect}>Disconnect</button>
        </div>
        <div className="flex space-x-6 mt-4">
          <span className="font-bold border-b-2 border-white pb-1">Token</span>
          <span className="font-bold text-gray-400">NFTs</span>
          <span className="font-bold text-gray-400">Record</span>
        </div>
        <div className="mt-4">
          {tokens.map((token, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <span className="block font-bold">{token.symbol}</span>
                <span className="block text-gray-400">{token.amount} {token.symbol}</span>
              </div>
              <span>${token.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletPanel;
