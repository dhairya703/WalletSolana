import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/Mar.png" height={90} width={100} />
            <span> Payment Portal</span>
            <WalletMultiButton />
        </div>
    )
}