//template for login page
import { useState } from "react";
import services from "./Services";
import { useDispatch } from "react-redux";
import { login, pageReloading, setUser, pageLoaded } from "../redux/actions";
import { useNavigate } from "react-router-dom";



function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function valSetter (e) {
    const id = e.target.id
    if (id == 'username') {
      setUsername(e.target.value)
    } else if (id == 'password') {
      setPassword(e.target.value)
    }
  }

  function loginFunction(e) {
    dispatch(pageReloading())
    e.preventDefault();
    if(!username || !password) {
      alert('Cant do that son!')
    } else {
      const user = {
        username,
        password
      }
      services.loginUser(user).then((res) => {
        dispatch(pageLoaded())
        setUsername('')
        setPassword('')
        if(res.username) {
          dispatch(login())
          dispatch(setUser(res))
          navigate(`/home`)
        } else {
          console.log(res)
        }
      })
    }
  }


  return (
    <div key={'form'} className="login-form-container">
      <div className="header">Login</div>
      <form className="login-form" onSubmit={(e) => {loginFunction(e)}}>
        <label className="username-input">
        <span>Username:</span>
          <input id="username" value={username} onChange={(event) => {valSetter(event)}} type="text" name="username" placeholder='Username...' />
        </label>
        <div className="password-input">
          <span>Password:</span>
          <input id="password" value={password} onChange={(event) => {valSetter(event)}} type="password" name="password" placeholder='Password...' />
        </div>
        <button className="login btn-submit" type="submit"> Login </button>
      </form>
    </div>
  )
}

export default LoginForm