import Image from "next/image";
import styles from "./home.module.css"; 
const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}> Navigating the Unknown </h1>
        <p className={styles.description}>
          Embark on a transformative journey of self-discovery and personal growth as we navigate the unknown terrain of life. Gain valuable insights, practical tips, and empowering strategies for overcoming challenges and unlocking your full potential.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandsImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  )
}


export default Homepage;