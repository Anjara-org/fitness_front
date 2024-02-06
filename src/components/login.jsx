export default function Login(){
    return(
        <div>
            se connecter
            <div>
                <input type="text" placeholder="Enter your email adress" name="email" required/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
            </div>
        </div>
    )
}