import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { userActions, adminActions } from './Store'
import { useNavigate } from 'react-router'
import './Components.css'
import axios from 'axios'


const Login = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isSignup, setIsSignup] = useState(false)
  const [userData, setUserData] = useState({})
  const [isUser, setIsUser] = useState(true)
 

  const sendData = async (what) => {

    if(what === "userSignup" ){
    let sendData 
    try{
       sendData = await axios.post('http://localhost:8100/users/signup', userData) 
      }
      catch(err){
        console.log(err)
      }
      const setId = sendData.data.existingUser
       localStorage.setItem('userId', setId._id)
      dispatch(userActions.login())
      navigate('/')
  }

  else if(what === "userLogin"){
    let sendData 
    try{
       sendData = await axios.post('http://localhost:8100/users/login', userData)
      }
      catch(err){
        console.log(err)
      }
      console.log(sendData)
       const setId = sendData.data.existingUser
       localStorage.setItem('userId', setId._id)
      dispatch(userActions.login())
      navigate('/')
  }

  else if(what === "admin"){
    let sendAdminData
    try{
      sendAdminData = await axios.post("http://localhost:8100/doctors/login", userData)
     
    }
    catch(err){
      console.log(err)
    }
    const doctorData = sendAdminData.data.existingDoctor
    localStorage.setItem("doctorId", doctorData._id)
    dispatch(adminActions.login())
    navigate('/')
  }


}

  const setCheckUserTrue = () => {
    setIsUser(true)
  }

  const setCheckUserFalse = () => {
    setIsUser(false)
  }
  
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const submission = (e) => {
    e.preventDefault()

    if(isUser === true){
      if(isSignup === true){
        sendData("userSignup")
      }
      else if(isSignup === false){
        sendData("userLogin")
      }
    }

    else if(isUser === false){
      sendData("admin")
    }

  }

  return (


    <>
    <div className='container-fluid logincard '>
        <div className='row justify-content-center signup'>
            <div className='col-md-4 formcon'>
    <div className='my-5 choose'>
    <ul class="nav nav-underline">
        <li class="nav-item">
           <a class="nav-link" aria-current="page" type='button' onClick={setCheckUserTrue}>Login as user</a>
        </li>
        <li class="nav-item">
           <a class="nav-link " aria-current="page" type='button' onClick={setCheckUserFalse}>Login as Admin</a>
        </li>
  </ul>
  </div>



    <form onSubmit={submission}>
        <div className="m-5">
    <h1>MENTIC</h1>
    {isUser && (
      <h2 className="h3 mb-3 fw-normal py-2">{isSignup ? "Signup / Create an account" : "Login"}</h2>
    )}

    {!isUser &&(
      <h2 className="h3 mb-3 fw-normal py-2">Login</h2>
    )}
    
    {isSignup && isUser && (
      <>
      <div className="form-floating py-2">
      <input type="text" name="name" className="form-control" id="floatingInput" placeholder="text" onChange={handleChange}/>
      <label for="floatingInput">Name</label>
    </div>
      </>
    )}
    <div className="form-floating py-2">
      <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleChange}/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating py-2">
      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
      <label for="floatingPassword">Password</label>
    </div>

    {isUser &&  (
      <button className="btn btn-primary w-100 py-3" type="submit">{isSignup  ? "Signup" : "Login"}</button>
    )}

    {!isUser && (
       <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
    )}
    
    {isUser &&  (
      <div type="button" className='loginoptn' onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Already a user? Login" : "Don't have an account? Create one"}</div>
    )}
    
    <p className="mt-5 mb-3 text-body-secondary">© 2023</p>
    </div>
  </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login