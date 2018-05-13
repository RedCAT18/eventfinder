import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { actionCreators as registerActions } from '../../reducer';

import MessageScreen from './presenter';

function mapStateToProps(state) {
  const { message } = state.register;
  return { message };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen);
