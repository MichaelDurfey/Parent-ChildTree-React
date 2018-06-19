import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/parent'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
    <div>
      <div className="container">
        <Parent />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
