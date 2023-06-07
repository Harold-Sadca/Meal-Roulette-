import { useState } from "react";
import services from "./Services";

function SignUp () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function valSetter (e) {
    const id = e.target.id
    if (id == 'username') {
      setUsername(e.target.value)
    } else if (id == 'password') {
      setPassword(e.target.value)
    } else if (id == 'email') {
      setEmail(e.target.value)
    }
  }

	function submitUser (e) {
    e.preventDefault()
		const newUser = {username, password, email}
    services.registerUser(newUser).then((res) => {
      setUsername('')
      setPassword('')
      setEmail('')
    })
	}

  return (
    <div className="signup-container">
      <div className="header">Sign Up</div>
      <form className="form" onSubmit={(e) => {submitUser(e)}}>
        <label className="username-input">
        <span>Username:</span>
          <input id="username" value={username} onChange={(event) => {valSetter(event)}} type="text" name="username" placeholder='Username...' />
        </label>
        <div className="password-input">
          <span>Password:</span>
          <input id="password" value={password} onChange={(event) => {valSetter(event)}} type="password" name="password" placeholder='Password...' />
        </div>
				<div className="email-input">
          <span>Email:</span>
          <input id="email" value={email} onChange={(event) => {valSetter(event)}} type="Email" name="Email" placeholder='Email...' />
        </div>
        <button className="create" type="submit"> Sign Up </button>
      </form>
    </div>
  )
}

export default SignUp