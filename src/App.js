import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';

import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

import Campaigns from './Components/Campaigns';
import HeroSection from './Components/HeroSection';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className=''>
        <NavBar />
        <HeroSection/>
        <Campaigns/>
      </div>
    </Router>
    
  );
}

export default App;
