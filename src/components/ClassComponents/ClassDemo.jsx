import React from "react";

class ClassDemo extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", this.props);

    this.state = {
      counter: 0,
    };

    // this.handleAdd = this.handleAdd.bind(this);
  }

  // shorthand way to initialize component state
  state = {
    counter: 0,
  };

  // arrow function automatically bind this context
  handleAdd = () => {
    // console.log("this", this);
    // console.log("setState", this.setState);
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("render");
    const root = document.querySelector("#root");
    console.log("root", root);
    return (
      <div>
        <h3>Class Counter Demo</h3>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1 to counter</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    const btn = document.querySelector("#toggle-btn");
    console.log("btn", btn);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    console.log(prevState, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default ClassDemo;

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     console.log("My name is", this.name);
//   }
// }

// const p1 = new Person("Alice");
// p1.greeting();

// const hello = p1.greeting;

// console.log(this);
// hello();
