import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { decrement, increment } from "../redux/action";

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Counter: {count}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "0.5rem" }}
        onClick={handleIncrement}
      >
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
