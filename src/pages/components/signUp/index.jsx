import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignUp(){
    const router = useRouter
    const [error, setError] = useState(null)

    async function handleSubmit(event){
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const email = formData.get('email')
        const password = formData.get('password')

   
        try {
            const response = await axios.post("http://localhost:8080/signup", {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            }, { withCredentials: true });

            console.log(response);
            // Rediriger l'utilisateur vers une autre page après l'inscription réussie
            router.push('/profile');
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription :', error);
            setError(error.message);
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
           s inscrire
            <div>
                <input type="text" placeholder="Enter your first name" name="First name" required/>
                <input type="text" placeholder="Enter your last name" name="Last name" required/>
                <input type="text" placeholder="Enter your email" name="email" required/>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Sign Up</button>
            </div>
        </form>
    )
}