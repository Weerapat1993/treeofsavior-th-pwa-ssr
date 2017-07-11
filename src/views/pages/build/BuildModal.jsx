import React, { Component } from 'react'
import Markdown from 'react-markdown'
import { 
  FlatButton,
  TextField,
  Dialog,
  FontIcon,
  FloatingActionButton,
} from 'material-ui'

import ContentAdd from 'material-ui/svg-icons/content/add'
import { globalStyles } from './styles'


class BuildModal extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
      title: null,
      description: null,
      preview: false,
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleKeyUpTitle = this.handleKeyUpTitle.bind(this)
    this.handleKeyUpSubtitle = this.handleKeyUpSubtitle.bind(this)
    this.handleKeyUpDescripiton = this.handleKeyUpDescripiton.bind(this)
    this.handleClickEditor = this.handleClickEditor.bind(this)
    this.handleClickPreview = this.handleClickPreview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleKeyUpTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleKeyUpSubtitle(e) {
    this.setState({ subtitle: e.target.value })
  }

  handleKeyUpDescripiton(e) {
    this.setState({ description: e.target.value })
  }

  handleClickEditor() {
    this.setState({ preview: false })
  }

  handleClickPreview() {
    this.setState({ preview: true })
  }

  handleSubmit() {
    const { title, subtitle, description } = this.state 
    const data = {
      title,
      subtitle,
      description,
    }
    this.props.handleSubmit(data)
    this.handleClose()
  }

  render() {
    const { title, subtitle, description, preview } = this.state
    const actions = [
      <div>
        Title
      </div>,
      <div style={{ float: 'right' }}>
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleSubmit}
        />
      </div> 
    ];
    return (
      <span>
        <FloatingActionButton 
          onTouchTap={this.handleOpen} 
          style={{ position: 'fixed', bottom: 30, right: 25}}>
          <ContentAdd />
        </FloatingActionButton>
        {/* Dialog */}
        <Dialog
          title='Github Editor'
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={globalStyles.modalWidth}
        >
          <div style={globalStyles.textCenter}>
            <FlatButton 
              icon={<FontIcon className="material-icons">edit</FontIcon>} 
              onTouchTap={this.handleClickEditor} 
              label="Editor" />
            <FlatButton 
              icon={<FontIcon className="material-icons">remove_red_eye</FontIcon>} 
              onTouchTap={this.handleClickPreview} 
              label="Preview" 
              primary />
          </div>
          <div style={globalStyles.textLeft}>
            <TextField
              hintText="Title Field"
              floatingLabelText="Title"
              type="text"
              onKeyUp={this.handleKeyUpTitle}
              fullWidth={true}
              defaultValue={title}
            />
            <br/>
            <TextField
              hintText="Subtitle Field"
              floatingLabelText="Subtitle"
              type="text"
              onKeyUp={this.handleKeyUpSubtitle}
              fullWidth={true}
              defaultValue={subtitle}
            />
            <br/>
            {
              (preview) ? <Markdown source={description ? description : 'No description'} /> :
              <TextField
                hintText="Descripiton Field"
                floatingLabelText="Descripiton"
                multiLine={true}
                rows={5}
                onKeyUp={this.handleKeyUpDescripiton}
                fullWidth={true}
                defaultValue={description}
              />
            }
          </div>
        </Dialog>
      </span>
    )
  }
}

export default BuildModal