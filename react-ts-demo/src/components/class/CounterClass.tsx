import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handelClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handelClick}>Add</button>
        <br />
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
