//template for login page
import { useState } from "react";
import services from "./Services";
import { useDispatch, useSelector } from "react-redux";
import { login, pageReloading, setUser, pageLoaded } from "../redux/actions";
import { useNavigate, useRoutes } from "react-router-dom";



function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const authenticated = useSelector(state => state.authenticated)
  const currentUser = useSelector(state => state.currentUser)
  const loadPage = useSelector(state => state.loadPage)
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
    //reset the loadPage to false here so the page doesnt load until the fetch request is finished
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
        //set the loadPage to true again so that the pages shows
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
    <div className="login-form-container">
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