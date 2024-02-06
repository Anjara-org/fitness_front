export default function SignUp(){
    return(
        <div>
            se connecter
            <div>
                <input type="text" placeholder="Enter your first name" name="First name" required/>
                <input type="text" placeholder="Enter your last name" name="Last name" required/>
                <input type="text" placeholder="Enter your email" name="email" required/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Sign Up</button>
            </div>
        </div>
    )
}