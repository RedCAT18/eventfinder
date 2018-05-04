import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainScreen from './presenter';
import { actionCreators as eventActions } from '../../reducer';

function mapStateToProps(state) {
  const { event_list } = state.event;
  // console.log(state);
  return { event_list };
}

//dispatch sending action to reducer
function mapDispatchToProps(dispatch) {
  return {
    showEvent: bindActionCreators(eventActions.showEventList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
