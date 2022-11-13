import React from "react";
const SignUp=()=>{
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <div className="Auth-form-title">
                        <h1>SignUp</h1>
                    </div>
                    <div className="auth-group">
                        <label>
                            Username
                        </label>
                        <input className="form-control" type="text" placeholder="enter username"/>
                    </div>
                    <div className="auth-group">
                        <label>
                            Email
                        </label>
                        <input className="form-control" type="email" placeholder="enter email"/>
                    </div>
                    <div className="auth-group">
                        <label>
                            Password
                        </label>
                        <input className="form-control" type="password" placeholder="enter password"/>
                    </div>
                    <div className="auth-group">
                        <label>
                            City
                        </label>
                        <input className="form-control" type="text" placeholder="enter city"/>
                    </div>
                    <div className="auth-group">
                        <label for ="address">New Address:</label>
                        <textarea id="address" name="address" rows="5" cols="30"></textarea>
                    </div>
                    <div className="auth-group">
                        <label>
                            Contact no.
                        </label>
                        <input className="form-control" type="number" placeholder="enter mobile  no."/>
                    </div>
                </div>
            </form>
            
        </div>

    )
}
export default SignUp;