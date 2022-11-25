import React, { Component } from "react";
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Email: "",
            Password: "",
            City: "",
            Contact:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        const { Username, Email, Password, City, Contact } = this.state;
        console.log(Username, Email, Password, City, Contact );
        fetch("http://localhost:5000/signup", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            Username,
            Email,
            Password,
            City,
            Contact,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
          });
      }
    render() {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={this.handleSubmit}>
                <div className="Auth-form-content">
                    <div className="Auth-form-title">
                        <h1>SignUp</h1>
                    </div>
                    <div className="auth-group">
                        <label>
                            Username
                        </label>
                        <input className="form-control" type="text" placeholder="enter username" 
                        onChange={(e) => this.setState({ Username: e.target.value })}/>
                    </div>
                    <div className="auth-group">
                        <label>
                            Email
                        </label>
                        <input className="form-control" type="email" placeholder="enter email"
                         onChange={(e) => this.setState({ Email: e.target.value })}/>
                    </div>
                    <div className="auth-group">
                        <label>
                            Password
                        </label>
                        <input className="form-control" type="password" placeholder="enter password" 
                        onChange={(e) => this.setState({ Password: e.target.value })}/>
                    </div>
                    <div className="auth-group">
                        <label>
                            City
                        </label>
                        <input className="form-control" type="text" placeholder="enter city" 
                        onChange={(e) => this.setState({ City: e.target.value })}/>
                    </div>
                    {/* <div className="auth-group">
                        <label for ="address">New Address:</label>
                        <textarea id="address" name="address" rows="5" cols="30"></textarea>
                    </div> */}
                    <div className="auth-group">
                        <label>
                            Contact no.
                        </label>
                        <input className="form-control" type="number" placeholder="enter mobile  no." 
                        onChange={(e) => this.setState({ Contact: e.target.value })}/>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button type="submit" className="btn btn-primary" id="myButton">
                        Submit
                        </button>
                    </div>
                    <div>
                    <p className="forgot-password text-right">
                     Already registered <a href="/sign-in">sign in?</a>
                    </p>
                    </div>
                </div>
            </form>
            
        </div>

    )
}
}
// export default SignUp;