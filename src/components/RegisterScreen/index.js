import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as registerActions } from '../../reducer';

import RegisterScreen from './presenter';

function mapStateToProps(state) {
  const { email, name, password, message, loading } = state.register;

  return { email, name, password, message, loading };
}

function mapDispatchToProps(dispatch) {
  return {
    inputForm: bindActionCreators(registerActions.inputRegisterForm, dispatch),
    register: bindActionCreators(registerActions.register, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
