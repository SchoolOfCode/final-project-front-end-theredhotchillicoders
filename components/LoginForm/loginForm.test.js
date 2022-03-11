import { app } from '../firebaseAuth/firebase'
import LoginForm from './LoginForm'
import { fireEvent, render, screen } from '@testing-library/react'

const username = process.env.TEST_USER
const password = process.env.TEST_PASSWORD

describe('Login form', () => {
    it('Renders an email, password, login button and allows text input', async () => {
        render(
            <LoginForm
                setIsLoggedIn={jest.fn()}
                setUser={jest.fn()}
            ></LoginForm>
        )
        const emailInput = screen.getByLabelText('Email')
        const passwordInput = screen.getByLabelText('Password')
        const loginButton = screen.getByText('Login')
        //Type in the username
        fireEvent.change(emailInput, {
            target: { value: process.env.TEST_USER },
        })
        fireEvent.change(passwordInput, {
            target: { value: process.env.TEST_PASSWORD },
        })
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()
        expect(emailInput.value).toEqual(process.env.TEST_USER)
        expect(passwordInput.value).toEqual(process.env.TEST_PASSWORD)
    })
})
