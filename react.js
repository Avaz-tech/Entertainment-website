class Cat extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        humor: 'happy'
      }
    }
    render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>
            {this.props.color}
          </p>
        </div>
      );
    }
  }
const Cat = props => {
  return (  
    <div>
      <h1>{props.name}</h1>
      <p>{props.color}</p>
    </div>;
  );
};
import React from 'react';

class MyComponent extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div>I am an element!</div>
        <button>I am another element</button>
      </React.Fragment>
    );
  }
}

export default MyComponent;
