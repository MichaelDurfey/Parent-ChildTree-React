import React from 'react';
import Parent from './Parent'

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Child',
      index: -1,
      properties: [
           ['name', 'foo' ],
          ['gender', 'male' ],
          ['favoriteColor', 'bar' ],
          ['likes', 'bar'],
      ],
      children: []
    }
  }

  addChild() {
    let children = this.state.children.slice();
    children.push(<Child removeChild={() => this.removeChild(this.state.index)} index={this.state.index}/>)
    this.setState({
      children,
      index: this.state.index += 1,
    })
  }

  removeChild(index) {
    let children = this.state.children.slice();
    children.splice(index, 1);
    this.setState({
      children,
      index: this.state.index -= 1,
    })
  }

  render() {
    const { title } = this.state;
    return (
    <div className="child">
      <h4 className="childTitle">{title}</h4>
      <ul className="properties">
        { this.state.properties.map((item, index) => {
          return <li key={index} className="property">{item[0]}: {item[1]}</li>
        })}
      </ul>
      <button onClick={() => this.addChild()}>Add Child</button>
      <button onClick={() => this.props.removeChild()}>Remove Child</button>
      <div className="children">
        {this.state.children}
      </div>
    </div>
    );
  }
}

export default Child;
