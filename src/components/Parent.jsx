import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Parent',
      properties: [
        ['name', 'foo' ],
       ['gender', 'male' ],
       ['favorite color', 'foobar' ],
       ['likes', 'bar'],
      ],
      children: [],
    }
  }

  addChild() {
    let children = this.state.children.slice();
    children.push(<Child />)
    this.setState({
      children,
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
        {this.state.children.map(child => {
          return <Child child={child}/>
        })}
      </div>
    </div>
    );
  }
}

export default Parent
