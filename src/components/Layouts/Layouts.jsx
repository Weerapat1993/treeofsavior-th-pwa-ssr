import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { 
  AppBar,
  Drawer,
  MenuItem,
  IconButton,
  FontIcon,
  FloatingActionButton,
  IconMenu,
  FlatButton,
} from 'material-ui'

import { logout } from '../../utils/auth'

import { fullWhite } from 'material-ui/styles/colors';
import ContentAdd from 'material-ui/svg-icons/content/add'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const styles = {
  container: {
    paddingTop: 64,
    zIndex: -1,
    maxWidth: 900,
    margin: 'auto'
  }
}

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

  render() {
    const { authed, children } = this.props
    return (
      <div>
        <AppBar
          style={{ position: 'fixed', top: 0 }}
          iconElementLeft={
            <IconButton onTouchTap={this.handleToggle}>
              <FontIcon className="material-icons">menu</FontIcon>
            </IconButton>
          }
          iconElementRight={
            (authed) ? 
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" onTouchTap={() => {
                logout()
              }} />
            </IconMenu>
            :
            <Link to={'/login'}>
              <FlatButton style={{ color: fullWhite }} label="Sign In" />
            </Link>
          }
        >
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
          </Drawer>
          {/* Add Button */}
          <FloatingActionButton style={{ position: 'fixed', bottom: 30, right: 25}}>
            <ContentAdd />
          </FloatingActionButton>
        </AppBar>
        <div style={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layouts