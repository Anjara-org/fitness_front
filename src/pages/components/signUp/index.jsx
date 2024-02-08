import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

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

        try{
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {'content type' : 'application/json'},
                body: JSON.stringify({firstName, lastName, email, password}),
            })
    
            if(response.ok){
                router.push('/profile')
            }else{
                const errorMessage = await response.text()
                throw new Error(errorMessage)
            }
        }catch (error){
            setError('somthing went wrong')
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
           s'inscrire
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