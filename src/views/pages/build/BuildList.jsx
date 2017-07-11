import React from 'react'
import PropTypes from 'prop-types'
import {  
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardTitle,
  CardText,
  FlatButton,
} from 'material-ui'

// ===============================================
// PURE COMPONENT
// ===============================================

const BuildList = ({ children }) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="https://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="https://lorempixel.com/100/100/nature/" alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

// ===============================================
// PROP TYPES
// ===============================================

BuildList.propTypes = {
  children: PropTypes.any
}

export default BuildList
