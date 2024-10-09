import React, { useMemo } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require ('@solana/wallet-adapter-react-ui/styles.css');

// const buttonStyle = "!bg-[#d74a94] !h-10 !rounded-md !w-28 !text-white !text-xs !mx-3";
const DonateButton = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => [clusterApiUrl(network), [network]]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [network]);

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton className="!bg-[#d74a94] !h-10 !rounded-md !w-28 !text-white !text-xs !mx-3" />
            </WalletModalProvider>
        </WalletProvider>
    );
}

export default DonateButton