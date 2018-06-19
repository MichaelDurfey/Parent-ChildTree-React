import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Parent',
      index: 0,
      properties: [
        ['name', 'foo' ],
       ['gender', 'male' ],
       ['favorite color', 'foobar' ],
       ['likes', 'bar'],
      ],
      children: [],
    }
  }
  
  removeChild(index){
    let children = this.state.children.slice();
    children.splice(index, 1);
    this.setState({
      children,
    })
  }

  addChild() {
    let children = this.state.children.slice();
    children.push(<Child removeChild={(index) => this.removeChild(index)} index={this.state.index}/>)
    this.setState({
      children,
      index: this.state.index += 1,
    })
  }

  render() {
    const { title } = this.state;
    return (
    <div className= "parent">
      <h4 className="childTitle">{title}</h4>
      <ul className="properties">
        { this.state.properties.map(item => {
          return <li className="property">{item[0]}: {item[1]}</li>
        })}
      </ul>
      <button onClick={() => this.addChild()}>Add Child</button>
      <div className="children">
        {this.state.children}
      </div>
    </div>
    );
  }
}

export default Parent
