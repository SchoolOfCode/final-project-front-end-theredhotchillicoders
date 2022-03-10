import React, { useState, useEffect } from 'react'
import GoogleButton from 'react-google-button'
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { app } from '../firebaseAuth/firebase.js'
import * as firebase from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
import { useTheme } from '@mui/styles'
import css from './GoogleAuth.module.css'

const GoogleAuth = ({ setIsLoggedIn, setUser }) => {
    const theme = useTheme()
    const router = useRouter()
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })

    //Google sign in function
    async function handleGoogleSignIn() {
        const authentication = getAuth()
        try {
            await signInWithPopup(authentication, provider).then((response) => {
                sessionStorage.setItem('Auth Token', response.user.accessToken)
                setIsLoggedIn(true)
                setUser(authentication.currentUser)
                router.reload()
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className={css.googleWrapper}>
            <GoogleButton
                type={theme.palette.type === 'light' ? 'light' : 'dark'}
                onClick={handleGoogleSignIn}
            ></GoogleButton>
        </div>
    )
}

export default GoogleAuth
