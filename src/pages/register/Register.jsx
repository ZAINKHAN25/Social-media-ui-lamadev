import { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from "react-router-dom";

export default function Register(){
    let [singupemailtxt,setsingupemailtxt] = useState('')
    let [signuppasswordtxt,setsignuppasswordtxt] = useState('')
    let [againpasssignuptxt,setagainpasssignuptxt] = useState('')
    let [usernamesignup,setusernamesignup] = useState('')
    let [validationerror,setvalidationerror] = useState('')
    let [congratsonaccount,setcongratsonaccount] = useState('')

    const navigate = useNavigate();

    async function singuphandler(e){
        e.preventDefault()
        if(singupemailtxt === '' || signuppasswordtxt === '' || againpasssignuptxt === ''|| usernamesignup === ''){
            setvalidationerror('Please Fill the form completely')
            setTimeout(()=>setvalidationerror(''), 3000)
        } else {
            if (signuppasswordtxt === againpasssignuptxt) {
                try {
                    const response = await axios.post(`https://social-media-app-with-mongo-db.vercel.app/auth/v1/register/`, {
                        username: usernamesignup,
                        password: signuppasswordtxt,
                        email: singupemailtxt
                    }).then(res => {
                        console.log(res);
                        setcongratsonaccount('Your account has been created Succesfully');
                        setTimeout(()=>navigate("/login"), 3000)
                    })
                  } catch (error) {
                    console.error(error);
                  } 
            } else{
                setvalidationerror('Your Password is incorrect')
                setTimeout(()=>setvalidationerror(''), 3000)
            }
        }
    }
    
    return (
        <div className='login'>
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">
                        Zainsocial
                    </h3>
                    <span className="logindesc">Connect and share with the people in your life with zainsocial.
</span>
                </div>
                <div className="loginright">
                    <form className="loginbox">
                        <input required onChange={(e)=> setusernamesignup(e.target.value)} placeholder="Username" className="logininput" />
                        <input type='email' required onChange={(e)=>setsingupemailtxt(e.target.value)} placeholder="Email" className="logininput" />
                        <input type='password' required onChange={(e)=>setsignuppasswordtxt(e.target.value)} placeholder="Password" className="logininput" />
                        <input type='password' required onChange={(e)=> setagainpasssignuptxt(e.target.value)} placeholder="Password Again" className="logininput" />
                        <p className='errorp'>{validationerror}</p>
                        <p className='succesfullycreatedp'>{congratsonaccount}</p>
                        <input value={'Sign up'} type='submit' onClick={singuphandler} className='loginbutton'/>
                        <button onClick={()=>navigate("/login")} className="loginregisterbutton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}