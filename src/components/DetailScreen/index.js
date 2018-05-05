import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DetailScreen from './presenter';
import { actioncreators as detailActions } from '../../reducer';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
