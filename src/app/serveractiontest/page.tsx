import { addPost } from "@/component/lib/action";
import styles from "./ServerActionTest.module.css"

const ServerActionTest = ()=>{

      return(
            <div className={styles.container}>
                  <form action={addPost} className={styles.form}>
                        <input type="text" name="title" placeholder="title"/>
                        <input type="text" name="description" placeholder="description"/>
                        <input type="text" name="slug" placeholder="slug"/>
                        <input type="text" name="userid" placeholder="userid"/>
                        <button>Create</button>
                  </form>
            </div>
      )
}

export default ServerActionTest;