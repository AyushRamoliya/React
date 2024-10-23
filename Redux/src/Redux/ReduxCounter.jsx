import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/Counterslice';

export default function ReduxCounter() {
    
  const count = useSelector((state) => state.CounterKey.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase(+)</button>
      <button onClick={() => dispatch(decrement())}>Decrease(-)</button>
    </div>
  );
}
