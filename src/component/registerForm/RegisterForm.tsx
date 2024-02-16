"use client";
import styles from "./register.module.css";
import { useFormState } from "react-dom";
import { addUser } from "../lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const initialState = {
      message: '',
    }

const RegisterForm = ()=>{
      const [state, formAction] = useFormState(addUser, initialState);
      const router = useRouter();
      useEffect(()=>{
            state?.success && router.push('/login');
      }, [state?.success, router])

      return(
            <div className={styles.wrapper}>
            <form className={styles.form} action={formAction}>
              <input type="text" placeholder="Username" name="username" />
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <input type="password" placeholder="Password" name="passwordRepeat" />
              <button type="submit">Register</button>
              {state?.error}
              <span>Have an account ? <Link href={"/login"}><b>LOGIN</b></Link></span>
            </form>
          </div>
      )
}

export default RegisterForm;