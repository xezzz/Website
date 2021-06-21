import styles from '../styles/Anchor.module.css';



export function Anchor(props: {url: string, children: React.ReactNode}) {
    return (
        <a className={styles.anchor} href={props.url} rel="noreferrer" target="_blank">
            {props.children}
        </a>
    )
}