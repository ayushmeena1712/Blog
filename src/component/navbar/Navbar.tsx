import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
const Navbar = () =>{
      return(
            <div className={styles.container}>
                  <Link href="/" className={styles.logo}>Blogger~s</Link>
                  <div>
                        <Links/>
                  </div>
            </div>
      )
}

export default Navbar;