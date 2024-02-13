import {signIn} from '@/auth'

export default async function handler(req, res) {
    try {
        const {email, password} = req.body
        await signIn('credentials', {email, password})
        const sessionData = req.body
        const encryptedSessionData = encrypt(sessionData);

        const cookie = serialize('session', encryptedSessionData, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // valide une semaine
            path: '/',
        });

        res.setHeader('Set-Cookie', cookie);
        res.status(200).json({success:true})
    }catch (error) {
        if (errror.type === 'CredentialsSignIn'){
            res.status(401).json({ error: 'Invalid credentials.'})
        }else{
            res.status(500).json({ error: 'Something went wrong.'})
        }
    }
}