import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddScreen from './presenter';
import { actionCreators as formActions } from '../../reducer';

function mapStateToProps(state) {
  const { title, description, date, amount } = state.form;

  return { title, description, date, amount };
}

//dispatch sending action to reducer
function mapDispatchToProps(dispatch) {
  return {
    inputForm: bindActionCreators(formActions.inputForm, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScreen);
