import React from 'react';
import { connect } from 'react-redux';
import { useForm } from '../../helper-functions/form-logic-functions';
import { toggleForgotPassword, forgotPassword } from '../../actions/authActions';
import { loginModalButtonRender } from '../../helper-functions/display-functions';

const initialCreds = {
  username: ''
};

function ForgotPasswordInput({ toggleForgotPassword, fetching, forgotPassword }) {
  const [creds, handleChange] = useForm(initialCreds);
  return (
    <div>
      <h2>Forgot Password?</h2>
      <div className="login_gradient" />
      <form onSubmit={e => forgotPassword(e, creds)}>
        <h3>Enter your username and we will e-mail you a confirmation code.</h3>
        <input placeholder="Username" name="username" value={creds.username} onChange={handleChange} className="login_input" type="text" />
        {loginModalButtonRender(fetching, 'Submit', 'modal_login_button')}
        <p onClick={toggleForgotPassword}>Back</p>
      </form>
    </div>
  );
}

export default connect(
  ({ authReducer: { fetching } }) => {
    return {
      fetching
    };
  },
  { toggleForgotPassword, forgotPassword }
)(ForgotPasswordInput);
