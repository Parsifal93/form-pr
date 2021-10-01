import React, { Component } from "react";
import LinksLog from "../LinksLog";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.initinalState = { login: "", password: "", remember: false };
    this.state = this.initinalState;
  }

  handleChange = (event) => {
    const {
      target: { type, value, cheked, name },
    } = event;
    const calcValue = type === "chekbox" ? cheked : value;

    this.setState({ [name]: calcValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              name="login"
              placeholder="Login"
              value={this.state.login}
              onChange={this.handleChange}
            />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div>
            <label htmlFor="">Remember Me</label>
            <input
              type="checkbox"
              name="remember"
              checked={this.state.remember}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <LinksLog />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
