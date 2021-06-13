
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Footer = () => {
    return (
    <><span className={styles.logo}>
        <Image src="/favicon.ico" alt="" width={72} height={16} />
        </span>
        Nishad Aherrao
        <span className={styles.logo}>
        <Image src="/favicon.ico" alt="" width={72} height={16} />
        </span>
        </>)
}

export default Footer