'use server'

import {signIn} from '@/auth'

export async function authenticate(){
    try {
        await signIn('credential', FormData)
    }catch (error){
        if(error){
            switch (error.type) {
                case 'CredentialSignIn':
                    return 'Invalid credentials.'
                default :
                    return 'Somthing went wrong.'
            }
        }
    }throw error
}