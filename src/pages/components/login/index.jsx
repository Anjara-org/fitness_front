import { useRouter } from "next/router"

export default function Login(){
    const router = useRouter()

    async function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        try {
            const response = await axios.post('http://localhost8080/login', {
              email: email,
              password: password
            });
      
            const { token } = response.data;
            document.cookie = `token=${token}; path=/`;
            router.push("/components/profile");
          } catch (error) {
            console.error(error);
            setError("Login failed");
          }
        };
      
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