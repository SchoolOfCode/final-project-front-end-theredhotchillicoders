import React from 'react'
import { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import { getAuth } from 'firebase/auth'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from './loginPage.module.css'

const auth = getAuth() 

export default function LoginPage({setIsLoggedIn, setUser}) {
  const [alignment, setAlignment] = useState('logIn');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
    <div className={styles.form}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="logIn">Log In</ToggleButton>
      <ToggleButton value="signUp">Sign Up</ToggleButton>
    </ToggleButtonGroup>
    {alignment === 'logIn'
      ?<LoginForm 
      setIsLoggedIn={setIsLoggedIn}
      setUser={setUser}/>
      :<SignupForm
      setIsLoggedIn={setIsLoggedIn}
      setUser={setUser}
      />
    }
    </div>
    </>
  )
}
