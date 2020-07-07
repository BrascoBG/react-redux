import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIcrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {this.props.val.map((item) => (
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
    ctr: state.counter,
    val: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIcrementCounter: () => dispatch({ type: actionTypes.INCREMENT, val: 1 }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT, val: 1 }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
    onSubstractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 5 }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, resId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
