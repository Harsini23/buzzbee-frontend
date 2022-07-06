import React, { Component } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your Registered phone number " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="background">
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <label>
              <label for="name">
                <b>Enter your name</b>
              </label>
              <br />
              <input type="text" required />
              <br />
              <label for="name">
                <b>Enter your Email</b>
              </label>
              <br />
              <input type="text" required />
              <br />
              <label for="Phno">
                <b>Enter your Number</b>
              </label>
              <br />
              <input
                type="text"
                name="country_code"
                title="Error Message"
                pattern="[1-9]{1}[0-9]{9}"
                value={this.state.value}
                onChange={this.handleChange}
                required
              />
            </label>
            <br /> <br />
            <input type="submit" value="Signup" />
            <h2>OR</h2>
            <Link to="/Mainpg">
              <input type="submit" value="Login"></input>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
