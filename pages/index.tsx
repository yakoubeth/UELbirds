import { ConnectWallet, SmartContract, Web3Button, useActiveClaimCondition, useAddress, useContract } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { BaseContract, ethers } from "ethers";
import Link from 'next/link';

const Home: NextPage = () => {
  const address = useAddress();
  const contractAddress = "0x4a9D1B4FD70d0d7264c0c634c0fCF3EdFA231Fd2";
  const { contract } = useContract(contractAddress);

  const { data: claimPhase, isLoading: loadingClaimPhase } = useActiveClaimCondition(contract, 0);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/other-birds">
  View other birds
</Link>
        </h1>

        <p className={styles.description}>
          Get started by Connecting your wallet to claim a Free Base Bird
        </p>

        <div className={styles.connect}>
          <ConnectWallet />
          <h1>Get Your Bird</h1>
          <div className={styles.birdContainer}>
          {!loadingClaimPhase ? (
            claimPhase && (
              <div>
                <img src="/birds/BaseBird.png" alt={claimPhase.metadata?.name} style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "0 auto",
          }} />
                <p>Phase name: {claimPhase.metadata?.name}</p>
                <p>Supply: {claimPhase.availableSupply}</p>
                <p>Price: {ethers.utils.formatUnits(claimPhase.price)}</p>

              </div>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Web3Button
            contractAddress={contractAddress}
            action={(contract) => contract.erc1155.claim(0, 1)}
            >Claim Base Bird</Web3Button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
