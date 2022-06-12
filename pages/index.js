import Head from "next/head"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta name="description" content="Our smart contract" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader></ManualHeader>*/}
            <Header />
            <LotteryEntrance />
        </div>
    )
}
