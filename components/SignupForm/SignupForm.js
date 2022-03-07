import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import styles from './Signup.module.css'
import { useRouter } from 'next/router'

const SignupForm = ({ setIsLoggedIn }) => {
    const router = useRouter()

    // create state variables for each input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(email, password)
        const authentication = getAuth()
        createUserWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response.user.accessToken)
                setIsLoggedIn(true)
                setUser(authentication.currentUser)
                router.push('/')
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Email Already in Use')
                }
            })
    }

    // useEffect(() => {
    //   let authToken = sessionStorage.getItem("Auth Token");

    //   if (authToken) {
    //     router.push("/");
    //   }
    // }, []);

    return (
        <form className={styles.signupWrapper} onSubmit={handleSubmit}>
            <div className={styles.inputfield}>
                <p className={styles.emailPassword}>Email</p>
                <input
                    variant="outlined"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.inputfield}>
                <p className={styles.emailPassword}>Password</p>
                <input
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.buttons}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        bgcolor: '#fdf7ec',
                        color: '#0a2342',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#0a2342',
                        },
                    }}
                >
                    Signup
                </Button>
                {/* <Button variant="contained">Cancel</Button> */}
            </div>
        </form>
    )
}

export default SignupForm
