import './login.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    let [loginemail, setloginemail] = useState('')
    let [loginpassword, setloginpassword] = useState('')
    let [messagepara, setmessagepara] = useState('')
    let [colorofmessage, setcolorofmessage] = useState('red')


    async function loginhandler() {
        try {
            const response = await axios.post(`https://social-media-app-with-mongo-db.vercel.app/auth/v1/login/`, {
                email: loginemail,
                password: loginpassword
            }).then(res => {
                console.log(res);
                setcolorofmessage('green')
                setmessagepara("Account Sign in Succesfully done")
                setTimeout(() => navigate('/'), 3000)
            }).catch(err => {
                setcolorofmessage('red')
                setcolorofmessage("Your password or email is wrong")
                setTimeout(() => setmessagepara(""), 3000)
            })
        } catch (error) {
            console.error(error);
            setcolorofmessage('red')
            setcolorofmessage("Your password or email is wrong")
            setTimeout(() => setmessagepara(""), 3000)
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
                    <div className="loginboximport">
                        <input onChange={(e) => setloginemail(e.target.value)} placeholder="Email" className="logininput" />
                        <input type='password' onChange={(e) => setloginpassword(e.target.value)} placeholder="Password" className="logininput" />
                        <button onClick={loginhandler} className='loginbutton'>Log In</button>
                        <p className='messageinput' color={{ color: colorofmessage }}>{messagepara}</p>
                        <span className="loginforgot">Forgot Password?</span>
                        <button onClick={() => navigate('/register')} className="loginregisterbutton">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}