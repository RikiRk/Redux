import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import { actionCreator } from "./state/index";
import {bindActionCreators} from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state=>state.amount)
  const actions = bindActionCreators(actionCreator, dispatch);
  return (
    <div>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.increase(100);
        }}
      >
        +
      </button>
      add this {balance}
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          actions.decrease(100);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
