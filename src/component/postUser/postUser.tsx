import Image from "next/image";
import { getUser } from "../lib/data";
import styles from "./postUser.module.css";

interface userData{
      username: string;
}


// const getData = async (userid: string) => { 
//       // const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
//       const res = await getUser(userid);
//       if (!res.ok) {
//         throw new Error("something went wrong");
//       }
//       else {
//         console.log("working well")
//       }
//       return res.json();
//     }



const PostUser = async ({userid}: {userid: string})=>{
      const user = await getUser(userid);
      return(
            <div className={styles.container}>
                  <Image height={50} width={50} src={user.img ? user.img :'/noavatar.png'} className={styles.avatar} alt='' />
                  <div className={styles.text}>
                        <span className={styles.title}>Author</span>
                        <span className={styles.username}>{user.username}</span>
                  </div>
            </ div>
      )
}

export default PostUser;  