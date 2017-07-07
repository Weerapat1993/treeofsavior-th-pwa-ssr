import React, { Component } from 'react'
import { firebaseAuth } from '../../config/firebase'
// import TheRoutes from 'utils/TheRoutes';
import Routes from '../../views/routes'

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return (
      <Routes authed={this.state.authed} /> 
    )
  }
  // render() {
  //   return (
  //     <Switch>
  //       {TheRoutes.map((route, key) => {
  //         return (
  //           <PropsRoute {...route} key={key} initialData={this.props.initialData} />
  //         )
  //       })}
  //     </Switch>
  //   )
  // }
}
