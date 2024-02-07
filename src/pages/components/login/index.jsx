import { FormEvent } from "react"
import { useRouter } from "next/router"

export default function Login(){
    const router = useRouter()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {'content type' : 'application/json'},
            body: JSON.stringify({email, password}),
        })

        if(response.ok){
            router.push('/progile')
        }else{

        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            se connecter
                <div>
                    <input type="text" placeholder="Enter your email adress" name="email" required/>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <button type="submit">Login</button>
                    <button type="submit" onClick={()=> router.push("/components/signUp")} >Sign Up</button>
                </div>
            </form> 
        </div>
    )
}