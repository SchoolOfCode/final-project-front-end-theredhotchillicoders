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
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(firstName, lastName, email, password)
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
            <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.buttons}>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
                <Button variant="contained">Cancel</Button>
            </div>
        </form>
    )
}

export default SignupForm
