import React from 'react';
import { connect } from 'react-redux';
import { useForm } from '../../helper-functions/form-logic-functions';
import { confirmSignUp, signUp } from '../../actions/authActions';
import Button from '../buttons/Button';

const initialForm = {
  username: '',
  password: '',
  email: '',
  name: ''
};

// @TODO: This could be refactored into subcomponents
function RegisterInput({ confirmSignUp, signUp, pendingConfirmation }) {
  const [formState, handleChange] = useForm(initialForm);
  const [{ code }, handleChangeCode] = useForm({
    code: ''
  });
  const formatUser = ({ username, password, email, name }) => ({
    username,
    password,
    attributes: {
      email,
      name
    }
  });
  const { username, password, email, name } = formState;
  return !pendingConfirmation ? (
    <form onSubmit={e => signUp(formatUser(formState), e)}>
      <div className="login_inputs_container">
        <label className="login_label">Full Name</label>
        <input name="name" value={name} onChange={handleChange} className="login_input" type="text" />
        <label className="login_label">E-mail</label>
        <input name="email" value={email} onChange={handleChange} className="login_input" type="text" />
        <label className="login_label">Username</label>
        <input name="username" value={username} onChange={handleChange} className="login_input" type="text" />
        <label className="login_label">Password</label>
        <input name="password" value={password} onChange={handleChange} className="login_input" type="password" />
        <Button buttonStyle="modal_login_button" buttonText="Login" />
      </div>
    </form>
  ) : (
    <form onSubmit={e => confirmSignUp({ username, password, code }, e)}>
      <div className="login_inputs_container">
        <label className="login_label">Confirmation Code</label>
        <input name="code" value={code} onChange={handleChangeCode} className="login_input" type="text" />
        <Button buttonStyle="modal_login_button" buttonText="Login" />
      </div>
    </form>
  );
}

const mapStateToProps = ({ authReducer }) => ({
  pendingConfirmation: authReducer.pendingConfirmation
});

export default connect(
  mapStateToProps,
  { confirmSignUp, signUp }
)(RegisterInput);