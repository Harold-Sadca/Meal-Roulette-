import { useState } from "react";
import services from "./Services";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
        console.log(res)
      })
    }
  }

  // return (
  //   <Router>
  //     <div className="App">
  //       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //         <div className="container">
  //           <Link className="navbar-brand" to={'/sign-in'}>
  //             positronX
  //           </Link>
  //           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //             <ul className="navbar-nav ml-auto">
  //               <li className="nav-item">
  //                 <Link className="nav-link" to={'/sign-in'}>
  //                   Login
  //                 </Link>
  //               </li>
  //               <li className="nav-item">
  //                 <Link className="nav-link" to={'/sign-up'}>
  //                   Sign up
  //                 </Link>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   </Router>
  // )
  return (
    <div className="login-form-container">
      <div className="header">Login</div>
      <form className="login-form" onSubmit={(e) => {login(e)}}>
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