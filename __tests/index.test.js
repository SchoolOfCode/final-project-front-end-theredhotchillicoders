import { app } from '../components/firebaseAuth/firebase.js'
import { render, screen } from '@testing-library/react'
import MyApp from './_app'
import React from 'react'

const icon = <svg></svg>

describe('When a user is not signed in the login page', () => {
    it('contains 2 email inputs (login or signup)', () => {
        render(<MyApp />)
        const emailInputs = screen.getAllByRole('textbox', { type: 'Email' })
        expect(emailInputs.length).toEqual(2)
    })
    // it('contains 2 password inputs (login or signup)', () => {
    //     render(<MyApp />)
    //     const passwordInputs = screen.getAllByRole('textbox', {
    //         type: 'password',
    //     })
    //     expect(passwordInputs.length).toEqual(2)
    // })
    // it('contains 1 login button', () => {
    //     render(<MyApp />)
    //     const loginButton = screen.getByRole('button', { name: 'Login' })
    //     expect(loginButton).toBeInTheDocument()
    // })
    // it('contains 1 signup button', () => {
    //     render(<MyApp />)
    //     const signupButton = screen.getByRole('button', { name: 'Signup' })
    //     expect(signupButton).toBeInTheDocument()
    // })
})
