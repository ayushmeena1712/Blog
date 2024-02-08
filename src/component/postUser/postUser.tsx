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
                  <span className={styles.title}>Author</span>
                  <span className={styles.username}>{user.username}</span>
            </ div>
      )
}

export default PostUser;  