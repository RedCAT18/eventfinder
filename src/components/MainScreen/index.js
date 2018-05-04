import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainScreen from './presenter';
import { actionCreators as eventActions } from '../../reducer';

const mapStateToProps = (state) => {
  const { event_list } = state;
  // console.log(event_list); 
  return { event_list };
}

//dispatch sending action to reducer
function mapDispatchToProps (dispatch) {
  return {
    showEvent: bindActionCreators(eventActions.showEventList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);