import React,{useState} from 'react'
import styles from './Login.module.css'
import useLogin from '../hooks/useLogin';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {login,error,isPending} = useLogin();


  const handleSubmit =(e) => {
    e.preventDefault();
    login(email,password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
    <h2>Login</h2>

    <label htmlFor='email'>
    <span>email:</span>
    <input 
      type='email'
      onChange={(e) => setEmail(e.target.value)}
      value={email}
    />
    </label>

    <label htmlFor='password'>
    <span>password:</span>
    <input 
      type='password'
      onChange={(e) => setPassword(e.target.value)}
      value={password}
    />
    </label>
   {!isPending && <button className='btn'>login</button>}
   {isPending &&  <button className='btn' disabled>loading...</button>}
    {error && <p>{error}</p>}

    </form>
  )
}

export default Login