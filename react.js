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
