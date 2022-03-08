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

const auth = getAuth()

export default function LoginPage({ setIsLoggedIn, setUser, activeMode}) {
    const [alignment, setAlignment] = useState('logIn')

    const handleChange = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment)
        }
    }
    return (
        <div className={styles.loginPageContainer}>
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
            </div>
        </div>
    )
}
