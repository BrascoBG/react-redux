import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
        <hr />
        <button onClick={() => this.props.onShowResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.result.map((item) => (
            <li
              key={item.id}
              onClick={() => this.props.onDeleteResult(item.id)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.combinedCounter.counter,
    result: state.combinedresult.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdd: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    onShowResult: (result) =>
      dispatch({ type: actionTypes.SHOW_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
