import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const cities = [
  { id: 0, name: ".......Select......." },
  { id: 1, name: "Delhi" },
  { id: 2, name: "Mumbai" },
  { id: 3, name: "Pune" },
  { id: 4, name: "Andhra Pradesh" },
  { id: 5, name: "Bangalore" },
  { id: 6, name: "Hyderabad" },
  { id: 7, name: "Indore" },
];

class Registration extends Component {
  state = {
    user_firstname: "",
    user_email: "",
    user_phone: "",
    user_password: "",
    user_lastname: "",
    user_city: "",
    user_zipcode: "",
  };

  postRegistration = async (event) => {
    event.preventDefault();
    const registration_api =
      "https://syoft.dev/Api/user_registeration/api/user_registeration";
    const {
      user_firstname,
      user_email,
      user_phone,
      user_password,
    } = this.state;
    const userDetails = {
      user_firstname,
      user_email,
      user_password,
      user_phone,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(registration_api, options);
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  };

  onChangeFirstName = (event) => {
    this.setState({ user_firstname: event.target.value });
  };

  onChangeLastName = (event) => {
    this.setState({ user_lastname: event.target.value });
  };

  onChangeMail = (event) => {
    this.setState({ user_email: event.target.value });
  };
  onChangeNumber = (event) => {
    this.setState({ user_phone: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ user_password: event.target.value });
  };

  onChangePinCode = (event) => {
    this.setState({ user_zipcode: event.target.value });
  };
  onChangeCity = (event) => {
    this.setState({ user_city: event.target.value });
  };

  staticPoster = () => (
    <div className="static-img-container">
      <img
        className="logo"
        src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1721016380/SYOFT-logo-profile-removebg-preview_hqva5v.png"
        alt="syoft logo"
      />
      <div>
        <h1 className="static-heading">Welcome to our community</h1>
        <p className="static-para">
          Syoft is one of the coveted development partners as we have broad
          domain expertise. Apart from being thought leaders, our focus is to be
          backed by industry trends and development of futuristic software
          solutions.
        </p>
      </div>
    </div>
  );

  registrationForm = () => {
    const {
      user_firstname,
      user_email,
      user_password,
      user_phone,
      user_lastname,
      user_city,
      user_zipcode,
    } = this.state;
    return (
      <form className="form-container" onSubmit={this.postRegistration}>
        <img
          className="form-logo"
          src="https://res.cloudinary.com/dg2fgkjxv/image/upload/v1721016380/SYOFT-logo-profile-removebg-preview_hqva5v.png"
          alt="logo"
        />
        <h2 className="signup-text">Sign Up</h2>
        <p className="login-sentence">
          <Link to="/login">
            <span className="login-text">Login. </span>
          </Link>
          if you have an account
        </p>
        <label htmlFor="first-name" className="label">
          First name*
        </label>
        <input
          type="text"
          id="first-name"
          className="input"
          placeholder="first name"
          onChange={this.onChangeFirstName}
          value={user_firstname}
        />
        <label htmlFor="last-name" className="label">
          Last name*
        </label>
        <input
          type="text"
          id="last-name"
          className="input"
          placeholder="last name"
          onChange={this.onChangeLastName}
          value={user_lastname}
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
          value={user_email}
        />
        <label htmlFor="number" className="label">
          Phone number*
        </label>
        <input
          type="text"
          id="number"
          className="input"
          placeholder="number"
          onChange={this.onChangeNumber}
          value={user_phone}
        />
        <label htmlFor="city" className="label">
          City*
        </label>
        <select
          className="select-dropdown"
          onChange={this.onChangeCity}
          value={user_city}
        >
          {cities.map((each) => (
            <option value={each.name} key={each.id}>
              {each.name}
            </option>
          ))}
        </select>
        <label htmlFor="pin" className="label">
          Pin code*
        </label>
        <input
          type="text"
          id="pin"
          className="input"
          placeholder="pin code"
          onChange={this.onChangePinCode}
          value={user_zipcode}
        />
        <label htmlFor="password" className="label">
          Enter password*
        </label>
        <input
          type="password"
          id="password"
          className="input"
          placeholder="password"
          onChange={this.onChangePassword}
          value={user_password}
        />
        <label htmlFor="confirm password" className="label">
          Confirm password*
        </label>
        <input
          type="password"
          id="confirm password"
          className="input"
          placeholder="password"
        />
        <Link to="/login">
          <button type="button" className="account-button">
            Create Account
          </button>
        </Link>
      </form>
    );
  };

  render() {
    return (
      <div className="register-main-container">
        <div className="sub-container">
          {this.staticPoster()}
          {this.registrationForm()}
        </div>
      </div>
    );
  }
}

export default Registration;
