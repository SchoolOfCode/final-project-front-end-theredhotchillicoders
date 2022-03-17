import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import styles from './LoginForm.module.css'
import { useRouter } from 'next/router'

const LoginForm = ({ setIsLoggedIn, setUser }) => {
    const router = useRouter()
    // create state variables for each input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const authentication = getAuth()
        signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem('Auth Token', response.user.accessToken)
                setIsLoggedIn(true)
                setUser(authentication.currentUser)
                router.reload()
            })
            .catch((error) => {
                console.log(error)
                if (error.code === 'auth/wrong-password') {
                    setLoginError('Incorrect password!')
                }
                if (error.code === 'auth/user-not-found') {
                    setLoginError('User not found!')
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
        <form className={styles.loginWrapper} onSubmit={handleSubmit}>
            <div className={styles.inputfield}>
                <p className={styles.errorMessage}>{loginError}</p>
                <p className={styles.emailPassword}>Email</p>
                <input
                    aria-label="Email"
                    data-test="loginEmail"
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
                    aria-label="Password"
                    data-test="loginPassword"
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
                    color="primary"
                    sx={{
                        bgcolor: '#fdf7ec',
                        color: '#0a2342',
                        borderRadius:'3px',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#0a2342',
                        },
                    }}
                >
                    Login
                </Button>
                {/* <Button variant="contained">Cancel</Button> */}
            </div>
        </form>
    )
}

export default LoginForm
