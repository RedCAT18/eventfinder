import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { actionCreators as registerActions } from '../../reducer';
import LoginScreen from './presenter';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
