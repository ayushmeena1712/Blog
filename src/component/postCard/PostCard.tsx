import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ()=>{
      return(
            <div className={styles.container}>
                  <div className={styles.top}>
                        <div className={styles.imgContainer}>
                              <Image src="https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg" alt="" fill className={styles.img} />
                        </div>
                        <span className={styles.date}>17.12.2002</span>
                  </div>
                  <div className={styles.bottom}>
                        <h1 className={styles.title}>Title</h1>
                        <p className={styles.description}>decs</p> 
                        <Link href={'/blog/post'} className={styles.link}>READ MORE </Link>
                  </div>
            </div> 
      )
}

export default PostCard;