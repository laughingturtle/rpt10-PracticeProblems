import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render () {
    return (
      <div>
        <h1>Photo Album</h1>
        <div>
          top section
        </div>
        <div>body
        <div id="left">left</div>
        <div id="right">right</div>
        </div>
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));