import styles from '../styles/Logo.module.css';



export function Logo() {
    return (
        <img className={styles.logo} src="/logo.png" alt="logo" />
    )
}