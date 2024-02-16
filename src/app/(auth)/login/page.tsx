import GithubLogin from "@/component/utils/githubLogin/GithubLogin";
import styles from "./login.module.css"

const LoginPage = () => {
  console.log("inside the login page");
  return (
    <div className={styles.container}>
      <GithubLogin />
    </div>
  );
}

export default LoginPage;