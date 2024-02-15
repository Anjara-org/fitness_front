
import { FormEvent } from "react"
import { useRouter } from "next/router"

export default function Login(){
    const router = useRouter()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

    try{
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {'content type' : 'application/json'},
            body: JSON.stringify({email, password}),
        })

        if (!response.ok) throw new Error("Login failed");

      const { token } = await response.json();
      document.cookie = `token=${token}; path=/`;
      router.push("/components/profile");
    } catch (error) {
      console.error(error);
    }
    }
    return(
            <form className="form-container" onSubmit={handleSubmit}>
            Welcome to Fitness
                <div>
                    <input type="email" placeholder="Enter your email adress" name="email" required/>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                    <button type="submit" onClick={()=> router.push("/components/signUp")} >Sign Up</button>
                </div>
            </form> 
    )
}