import { Component } from "react";
import "./index.css";
class Login extends Component {
  state = { mail: "", password: "" };

  onChangeMail = (event) => {
    this.setState({ mail: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickLogin = async () => {
    const { mail, password } = this.state;
    const userDetails = { mail, password };
    const api = "https://syoft.dev/Api/userlogin/api/userlogin";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(api, options);
    console.log(response);
    if (response.ok) {
      const { history } = this.props;
    }
  };

  render() {
    const { mail, password } = this.state;
    return (
      <div className="login-main-container">
        <form className="login-form-container">
          <img
            className="login-logo"
            src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1721016380/SYOFT-logo-profile-removebg-preview_hqva5v.png"
            alt="logo"
          />
          <label htmlFor="mail" className="label">
            Mail*
          </label>
          <input
            type="text"
            id="mail"
            className="input"
            placeholder="mail"
            onChange={this.onChangeMail}
            value={mail}
          />
          <label htmlFor="password" className="label">
            Password*
          </label>
          <input
            type="text"
            id="password"
            className="input"
            placeholder="password"
            onChange={this.onChangePassword}
            value={password}
          />
          <button
            type="button"
            className="login-button"
            onClick={this.onClickLogin}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
