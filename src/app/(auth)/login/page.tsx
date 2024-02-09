import { signIn } from "@/component/lib/auth";

 

const LoginPage = () => { 
  const handleGithubLogin = async ()=>{
    "use server"
    await signIn("github");
  };
  return (
    <div>
      <form action={handleGithubLogin}>
        <button type="submit">Login With Github</button>
      </form>
    </div>
  )
}

export default LoginPage;