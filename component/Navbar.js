import Link from "next/link"
import styles from "../src/styles/pokemon.module.css"


const NavBar = () => {
    return(
        <>
        <nav className={styles.nav}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
        </nav>
        </>
    )
}

export default NavBar;