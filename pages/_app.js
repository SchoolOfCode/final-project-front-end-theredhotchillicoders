import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import { darkMode, lightMode } from '../styles/themes'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from '../components/NavBar/NavBar'
import 'normalize.css/normalize.css'
import { app } from '../components/firebaseAuth/firebase'
import { useRouter } from 'next/router'
import LoginForm from '../components/LoginForm/LoginForm'
import SignupForm from '../components/SignupForm/SignupForm'
import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { Box, Button, CircularProgress } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

const auth = getAuth()

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(auth.currentUser)
    const router = useRouter()
    const [activeMode, setActiveMode] = useState('light')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const icon =
        activeMode === 'light' ? (
            <LightModeIcon style={{ fill: '#0a2342' }} />
        ) : (
            <ModeNightIcon sx={{ color: '#FDF7EC', fill: '#FDF7EC' }} />
        )

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                console.log(user.accessToken)
                const uid = user.uid
                sessionStorage.setItem('Auth Token', user.accessToken)
                setIsLoading(false)
                // ...
            } else {
                console.log('User is not logged in')
                setIsLoading(false)
                // User is signed out
            }
        })
        return unsubscribe
    }, [])

    useEffect(() => {
        const checkMode = () => {
            let mode = sessionStorage.getItem('mode')
            if (mode === 'dark') {
                setActiveMode('dark')
            } else if (mode === 'light') {
                setActiveMode('light')
            }
        }
        return checkMode
    }, [activeMode])

    return (
        <ThemeProvider theme={activeMode === 'light' ? lightMode : darkMode}>
            <CssBaseline />
            {isLoading ? (
                <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
                    <CircularProgress
                        style={{ margin: 'auto' }}
                    ></CircularProgress>
                </Box>
            ) : user ? (
                <>
                    <NavBar></NavBar>
                    <Component
                        icon={icon}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        pageProps={pageProps}
                        toggleColorMode={() => {
                            setActiveMode(
                                activeMode === 'light' ? lightMode : darkMode
                            )
                            sessionStorage.setItem(
                                'mode',
                                activeMode === 'light' ? 'dark' : 'light'
                            )
                        }}
                        user={user}
                        mode={activeMode.type}
                    />
                </>
            ) : (
                <>
                    <LoginForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    ></LoginForm>
                    <SignupForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    ></SignupForm>
                </>
            )}
        </ThemeProvider>
    )
}

export default MyApp
