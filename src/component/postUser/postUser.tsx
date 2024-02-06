import styles from "./postUser.module.css";

interface userData{
      username: string;
}


const getData = async (id: number) : Promise<userData> => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!res.ok) {
        throw new Error("something went wrong");
      }
      else {
        console.log("working well")
      }
      return res.json();
    }



const postUser = async ({userid}: {userid: number})=>{
      const user = await getData(userid);
      return(
            <div className={styles.container}>
                  <span className={styles.title}></span>
                  <span className={styles.username}>{user.username}</span>
            </ div>
      )
}

export default postUser;