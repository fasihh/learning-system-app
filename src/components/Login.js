import { useState } from 'react'
import '../styles/Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log("sign in");
    }

    return (
    <>
    <div className='login-container'>
        <p>Sign in</p>
        <form onClick={ handleSignIn }>
            <div className='input-container'>
                <label>Username</label>
                <input
                    value={ username }
                    onChange={ e => setUsername(e.target.value) }
                    type='text'
                />
            </div>
            <div className='input-container'>
                <label>Password</label>
                <input
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                    type='password'
                />
            </div>
        </form>
        <button onClick={ handleSignIn }>Sign in</button>
    </div>
    </>
    );
}
 
export default Login;