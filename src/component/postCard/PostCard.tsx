import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

interface posts{
      item :{
            userid: string;
            id: number;
            title: string;
            body: string;
            img: string;
          }
}


const PostCard = ({item}:posts)=>{ 
      return(
            <div className={styles.container}>
                  <div className={styles.top} >
                        {item.img && <div className={styles.imgContainer}>
                              <Image src={item.img} alt="" fill className={styles.img} />
                        </div>}
                        <span className={styles.date}>17.12.2002</span>
                  </div>
                  <div className={styles.bottom}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.description}>{item.body}</p>
                        <Link className={styles.link} href={`/blog/${item.userid}`}>READ MORE</Link>
                  </div>
            </div> 
      )
}

export default PostCard;