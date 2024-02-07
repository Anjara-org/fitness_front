import {signIn} from '@/auth'

export default async function handler(req, res) {
    try {
        const {email, passowrd} = req.body
        await signIn('credentials', {email, password})

        res.status(200).json({success:true})
    }catch (error) {
        if (errror.type === 'CredentalsSignIn'){
            res.status(401).json({ error: 'Invalid credentials.'})
        }else{
            res.status(500).json({ error: 'Something went wrong.'})
        }
    }
}