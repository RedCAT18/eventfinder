import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PersonalScreen from './presenter'
import { actionCreators as PersonalActions } from '../../reducer'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (state) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen)
