import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import { darkMode, lightMode } from '../styles/themes'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import NavBar from '../components/NavBar/NavBar'
import NavTop from '../components/NavTop/NavTop'
import 'normalize.css/normalize.css'
import { app } from '../components/firebaseAuth/firebase'
import { useRouter } from 'next/router'
import LoginForm from '../components/LoginForm/LoginForm'
import SignupForm from '../components/SignupForm/SignupForm'
import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth'
import { Box, Button, CircularProgress } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import LoginPage from '../components/LoginPage/LoginPage'
import { NavigationSharp } from '@mui/icons-material'

const auth = getAuth()

function MyApp({ Component, pageProps }) {
    const [user, setUser] = useState(auth.currentUser)
    const router = useRouter()
    const [activeMode, setActiveMode] = useState('light')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const icon =
        activeMode === 'light' ? (
            <LightModeIcon style={{ fill: 'red', height:'50em'}} />
        ) : (
            <ModeNightIcon sx={{ color: 'red', fill: 'red', height:'50em' }} />
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
            return
        }
        return checkMode()
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
                    <NavTop/>
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
                    <NavBar></NavBar>
                </>
            ) : (
                <>
                <LoginPage
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser}
                    activeMode={activeMode}
                />
                    {/* <LoginForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    ></LoginForm>
                    <SignupForm
                        setIsLoggedIn={setIsLoggedIn}
                        setUser={setUser}
                    ></SignupForm> */}
                </>
            )}
            
        </ThemeProvider>
    )
}

export default MyApp
