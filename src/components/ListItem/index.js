import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListItem from './presenter';
import { actionCreators as eventActions } from '../../reducer';

function mapStateToProps (state) {
  const { id, title } = state.event_list;

  return { id, title };
}

//dispatch sending action to reducer
function mapDispatchToProps (dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);