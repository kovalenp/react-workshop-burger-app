import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import classes from './Auth.css';
import * as actions from '../../store/actions'

class Auth extends Component {

  state = {
    authType: "SIGN UP",
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false
      },
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true,
      }
    };
    this.setState({ controls: updatedControls });
  }


  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.authType)
  }


  displaySignUp = () => {
    this.setState({ authType: "SIGN UP" })
  }

  displaySignIn = () => {
    this.setState({ authType: "SIGN IN" })
  }


  render() {

    if (this.props.isAuth) {
      this.props.history.push("/");
    }

    let authButton;

    let formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    if (this.state.authType === "SIGN UP") {
      authButton = (<Button btnType="Danger" clicked={this.displaySignIn}>ALREADY HAVE AN ACCOUNT? SIGN IN!</Button>)
    } else {
      authButton = (<Button btnType="Danger" clicked={this.displaySignUp} >DON'T HAVE AN ACCOUNT? SIGN UP!</Button>)
      // not part of the Udemy course, just added to make sign up / sign in forms different
      // name parameter isn't sent anywhere since Firebase API is used for Auth
      // normally would have used custom authorization and save user data in mongo
      formElementsArray = formElementsArray.filter(el => el.id !== 'name')
    }


    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
    ));




    return (
      <div className={classes.Auth}>
        {this.props.error && <p>{this.props.error.message}</p>}
        <form onSubmit={this.submitHandler}>
          {(this.props.loading) ? <Spinner /> : form}
          <Button btnType="Success" >SUBMIT</Button>
        </form>
        {authButton}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, authType) => dispatch(actions.auth(email, password, authType))
  }
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token != null,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);