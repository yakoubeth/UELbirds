import { ConnectWallet, SmartContract, Web3Button, useActiveClaimCondition, useAddress, useContract,  } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BaseContract, ethers } from "ethers";
import Link from 'next/link';

const OtherBirds: NextPage = () => {
  const address = useAddress();
  const contractAddress = "0x4a9D1B4FD70d0d7264c0c634c0fCF3EdFA231Fd2";
  const { contract } = useContract(contractAddress);
 
  const { data: claimPhase3, isLoading: loadingClaimPhase3 } = useActiveClaimCondition(contract, 2);
  const { data: claimPhase4, isLoading: loadingClaimPhase4 } = useActiveClaimCondition(contract, 3);
  const { data: claimPhase5, isLoading: loadingClaimPhase5 } = useActiveClaimCondition(contract, 4);
  const { data: claimPhase2, isLoading: loadingClaimPhase2 } = useActiveClaimCondition(contract, 1);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
  Get Your Free Bird
</Link>
        </h1>

        <p className={styles.description}>
          Get started by Connecting your wallet to claim a Free Base Bird
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
          <div className={styles.birdGrid}>
            <div className={styles.birdContainer}>
          {!loadingClaimPhase2 ? (
            claimPhase2 && (
              <div>
                <img src="/birds/RareBird2.png" alt={claimPhase2.metadata?.name} style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }} />
                <p>Phase name: {claimPhase2.metadata?.name}</p>
                <p>Supply: {claimPhase2.availableSupply}</p>
                <p>Price: {ethers.utils.formatUnits(claimPhase2.price)}</p>

              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(1, 1)}
            >Mint Rare Bird</Web3Button>
            </div>

            <div className={styles.birdContainer}>
          {!loadingClaimPhase3 ? (
            claimPhase3 && (
              <div>
                <img src="/birds/RareBird1.png" alt={claimPhase3.metadata?.name} style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }} />
                <p>Phase name: {claimPhase3.metadata?.name}</p>
                <p>Supply: {claimPhase3.availableSupply}</p>
                <p>Price: {ethers.utils.formatUnits(claimPhase3.price)}</p>

              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(2, 1)}
            >Mint Rare Bird</Web3Button>
            </div>

            <div className={styles.birdContainer}>
          {!loadingClaimPhase4 ? (
            claimPhase4 && (
              <div>
                <img src="/birds/VeryRareBird1.png" alt={claimPhase4.metadata?.name} style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }} />
                <p>Phase name: {claimPhase4.metadata?.name}</p>
                <p>Supply: {claimPhase4.availableSupply}</p>
                <p>Price: {ethers.utils.formatUnits(claimPhase4.price)}</p>

              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(3, 1)}
            >Mint Very Rare Bird</Web3Button>
            </div>

            <div className={styles.birdContainer}>
          {!loadingClaimPhase5 ? (
            claimPhase5 && (
              <div>
                <img src="/birds/VeryRareBird2.png" alt={claimPhase5.metadata?.name} style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }} />
                <p>Phase name: {claimPhase5.metadata?.name}</p>
                <p>Supply: {claimPhase5.availableSupply}</p>
                <p>Price: {ethers.utils.formatUnits(claimPhase5.price)}</p>

              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(4, 1)}
            >Mint Very Rare Bird</Web3Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OtherBirds;
