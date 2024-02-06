import { useRouter } from "next/router"

export default function Login(){
    const signUp = useRouter()
    return(
        <div>
            se connecter
            <div>
                <input type="text" placeholder="Enter your email adress" name="email" required/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
                <button type="submit" onClick={()=> signUp.push("/components/signUp")} >Sign Up</button>
            </div>
        </div>
    )
}