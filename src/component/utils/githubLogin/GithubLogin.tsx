"use client";
import { signIn, signOut, useSession } from "next-auth/react"
import styles from './github.module.css';

const GithubLogin = () => {
      const {data: session} = useSession();

      return(
      <div className={styles.container}>
            <form className={styles.form}>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Password" name="passwordRepeat" />
            <button>LOGIN</button>
            </form>
            <div className={styles.github}>
                  <button><button onClick={()=> signIn('github', {callbackUrl:`${window.location.origin}`})}>SIGNIN With GitHub</button></button>
            </div>
      </div>
      )

      // if(session){
      //       return(
      //             <>
      //                   <h1>You signed IN</h1>
      //                   <button onClick={()=> signOut({callbackUrl:`${window.location.origin}`})}>SIGNOUT</button>
      //             </>
      //       )
      // }
      // return(
      //       <div>
      //             not signed in please signIn
      //             <button onClick={()=> signIn('github', {callbackUrl:`${window.location.origin}`})}>SIGNIN</button>
      //       </div>
      // )
}

export default GithubLogin;