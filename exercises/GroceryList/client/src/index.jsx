import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import Data from'../../database/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: Data.groceryList
    }
  }

  handleForm (descript, quant) {
    var insert = false;
    var arr = this.state.list.slice();

    for(var i = 0; i < arr.length; i++){
      if(arr[i].description.toUpperCase() === descript.toUpperCase()) {
        insert = true;
        arr[i].quantity = arr[i].quantity + Number(quant);
      }
    }
    if(!insert){
      arr.push({id:Number(arr.length +1), quantity: Number(quant), description: descript });
    }
    insert = false;

    this.setState({
      list: arr
    });
  }


  render () {
    return (
      <div>
        <div>
          {/* {console.log('my data', this.state.list)} */}
          <GroceryList list={this.state.list}/>
        </div>
        <div>
          <AddGrocery handleForm={this.handleForm.bind(this)} />
        </div>
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));