import './register.css'

export default function Register(){
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
                        <input placeholder="Username" className="logininput" />
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <input placeholder="Password Again" className="logininput" />
                        <button className='loginbutton'>Sign up</button>
                        <button className="loginregisterbutton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}