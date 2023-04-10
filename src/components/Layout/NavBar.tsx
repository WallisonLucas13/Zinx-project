import Link from "next/link";
import styles from './NavBar.module.css'
import logo from '../../../files/logo3.webp';

export default function NavBar(){
    return (
        <>
        
            <nav className={styles.nav}>
                <h1>ZINX</h1>
                <ul>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/projetos" className={styles.link}>Projetos</Link></li>
                    <li><Link href="/about" className={styles.link}>About</Link></li>
                </ul>
            </nav>

        </>
    )
}