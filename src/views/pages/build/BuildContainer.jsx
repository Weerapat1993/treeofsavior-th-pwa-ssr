// Modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CircularProgress } from 'material-ui'

// Redux Structure
import { buildActions } from '../../../redux-modules/modules/build'

// Component
import BuildList from './BuildList'
import BuildModal from './BuildModal'

// ===============================================
// CONTAINER
// ===============================================
export class BuildContainer extends Component {
  // PropTypes
  static propTypes = {
    builds:        PropTypes.object.isRequired,
    buildActions:  PropTypes.object.isRequired,
  }

  handleSubmit(value) {
    console.log(value)
  }

  componentDidMount() {
    this.props.buildActions.fetchBuild()
  }

  render() {
    const { builds } = this.props
    return (
      <div>
        <h1>Builds</h1>
        {
          builds.isFetching ? <CircularProgress /> 
          : <BuildList builds={builds.data}  />
        }
        <BuildModal handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

// ===============================================
// CONNECT
// ===============================================

const mapStateToProps = (state, ownProps) => ({
  builds: state.build
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  buildActions: bindActionCreators(buildActions, dispatch),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BuildContainer)
