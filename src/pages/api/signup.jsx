import SignUp from "../components/signUp"

export default async function handler(req, res){
    try {
        const {firstName, LastName, email, password} = req.body
        await SignUp({firstName, LastName, email, password})

        res.status(200).json({success:true})
    }catch(error){
        if (error.type === 'signUpError'){
            res.status(400).json({error: error.message})
        }else{
            res.status(500).json({error: 'somethin went wrong !'})
        }
    }
}