import { useState } from "react";
import services from "./Services";

function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  function valSetter (e) {
    const id = e.target.id
    if (id == 'username') {
      setUsername(e.target.value)
    } else if (id == 'password') {
      setPassword(e.target.value)
    }
  }

  function login(e) {
    e.preventDefault();
    if(!username || !password) {
      alert('Cant do that son!')
    } else {
      const user = {
        username,
        password
      }
      services.loginUser(user).then((res) => {
        setUsername('')
        setPassword('')
        console.log('logged in')
      })
    }
  }

  return (
    <div className="form-container">
      <div className="header">Login</div>
      <form className="form" onSubmit={(e) => {login(e)}}>
        <label className="username-input">
        <span>Username:</span>
          <input id="username" value={username} onChange={(event) => {valSetter(event)}} type="text" name="username" placeholder='Username...' />
        </label>
        <div className="password-input">
          <span>Password:</span>
          <input id="password" value={password} onChange={(event) => {valSetter(event)}} type="password" name="password" placeholder='Password...' />
        </div>
        <button className="create" type="submit"> Login </button>
      </form>
    </div>
  )
}

export default LoginForm