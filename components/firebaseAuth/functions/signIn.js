import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export function signIn(e, email, password) {
    if (e) {
        e.preventDefault()
    }
    const authentication = getAuth()
    signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
            console.log(response)
            // sessionStorage.setItem('Auth Token', response.user.accessToken)
        })
        .catch((error) => {
            console.log(error)
            if (error.code === 'auth/wrong-password') {
                alert('Wrong password.')
                console.log('wrong password')
            }
            if (error.code === 'auth/user-not-found') {
                alert('User not found.')
            }
        })
    return authentication.currentUser
}
