import React from 'react';


class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onChangeDescription (e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeQuantity (e) {
    this.setState({
      quantity: e.target.value
    });
  }

  add () {
    this.props.handleForm(this.state.description,this.state.quantity);
  }

  render () {
    return (
      <div>
        <h2>Still Hungry?</h2>

        <label> What you want? &nbsp;
          <input onChange={this.onChangeDescription.bind(this)} />
        </label>
        <br />
        <label> How much? &nbsp;
          <input onChange={this.onChangeQuantity.bind(this)} />
        </label>
         <br />
         <button onClick={this.add.bind(this)}>Add more stuff to your basket</button>

    </div>
    );
  }
}

export default AddGrocery;
