import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import CustomInput from "./CustomInput";
import * as actions from "../actions";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(formData) {
    console.log("onSubmit() got called");
    console.log("formData", formData);

    //need to call some action
    await this.props.signUp(formData);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <button type="submit" className="btn btn-outline-primary">
          {" "}
          Log in with Facebook
        </button>
        <button type="submit" className="btn btn-outline-primary">
          Log in with Google
        </button>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <Field
              name="email"
              type="text"
              id="email"
              label="Enter your email"
              placeholder="exmaple@example.com"
              component={CustomInput}
            />
          </fieldset>
          <fieldset>
            <Field
              name="password"
              type="password"
              id="password"
              label="Enter your password"
              placeholder="yourpassword"
              component={CustomInput}
            />
          </fieldset>

          {this.props.errorMessage ? (
            <div className="alert alert-danger" />
          ) : null}

          <button type="submit" className="btn btn-outline-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

function a() {
  return console.log("hello");
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}
export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(SignUp);
