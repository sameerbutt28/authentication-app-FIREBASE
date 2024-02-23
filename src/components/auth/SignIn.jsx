import React, {useState} from 'react'

const SignIn = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
  return (
    <div className='sign-in'>
       <form >
<input type="email" placeholder='Enter your Email' value={email} />
<input type="password" placeholder='Enter your Password' value={password} />

       </form>
    </div>
  )
}

export default SignIn
