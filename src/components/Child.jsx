import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Child',
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
    children.push(<Child />)
    this.setState({
      children,
    })
  }

  removeChild(e) {
    console.log(this.state.index)
    let children = this.state.children.slice();

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
      <button onClick={(e) => this.removeChild(e)}>Remove Child</button>
      <div className="children">
        {this.state.children.map(child => {
          return <Child child={child} />
        })}
      </div>
    </div>
    );
  }
}

export default Child;
