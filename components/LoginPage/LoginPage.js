import React from 'react'
import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import { getAuth } from 'firebase/auth'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import styles from './loginPage.module.css'
import Image from 'next/image'
import creamLogo from '../../public/creamLogo.png'
import navyLogo from '../../public/navyLogo.png'
import GoogleAuth from '../GoogleAuth/GoogleAuth'
import Head from 'next/head'

const auth = getAuth()

export default function LoginPage({ setIsLoggedIn, setUser, activeMode }) {
    const [alignment, setAlignment] = useState('logIn')

    const handleChange = (e, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment)
        }
    }
    return (
        <div className={styles.loginPageContainer}>
            <Head>
                <title>Life Lifter - Login</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className={styles.logoContainer}>
                {activeMode === 'light' ? (
                    <Image
                        className={styles.logo}
                        src={creamLogo}
                        alt="logo-life-Lifter"
                        width={418}
                        height={124}
                    />
                ) : (
                    <Image
                        className={styles.logo}
                        src={navyLogo}
                        alt="logo-life-Lifter"
                        width={418}
                        height={124}
                    />
                )}

                <h2 className={styles.logoDescription}>
                    Life weighing you down? <br></br>
                    Let us do the lifting.
                </h2>
            </div>
            <div className={styles.form}>
                <div className={styles.loginSignup}>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        style={{
                            borderRadius: '3px',
                            borderStyle: 'solid',
                            borderWidth: '1px',
                            borderColor: 'theme',
                        }}
                    >
                        <ToggleButton value="logIn">Log In</ToggleButton>
                        <ToggleButton value="signUp">Sign Up</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {alignment === 'logIn' ? (
                    <LoginForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    />
                ) : (
                    <SignupForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    />
                )}
                <GoogleAuth
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                ></GoogleAuth>
            </div>
        </div>
    )
}
