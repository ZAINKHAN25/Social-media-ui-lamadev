import './login.css'

export default function Login(){
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
                    <div className="loginbox">
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <button className='loginbutton'>Log In</button>
                        <span className="loginforgot">Forgot Password?</span>
                        <button className="loginregisterbutton">Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}