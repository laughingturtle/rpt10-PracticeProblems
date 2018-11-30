import React from 'react';

export default class GroceryList extends React.Component  {

  constructor(props)  {
      super(props);

      this.state = {
          click: false
        };
  }

  onListItemClick() {
    this.setState({
      click: !this.state.click
    });
  }

  render() {
    var style = {
      textDecoration: this.state.click ? 'line-through' : 'none'
    }

    return(
        <div>
          {/* {console.log('props in Groc Item', props.description)} */}
          <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.description} - <strong>{this.props.quantity}</strong></li>
        </div>
      );
  }
}
