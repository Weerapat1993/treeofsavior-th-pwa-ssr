import React, { Component } from 'react'
import { 
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton,
} from 'material-ui'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Card>
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://lorempixel.com/100/100/nature/"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
          <img src="https://lorempixel.com/600/337/nature/" alt='' />
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
      </div>
    )
  }
}

export default Home