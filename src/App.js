import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store-redux/incdeSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incremHandler = () => {
    return dispatch(increment(2))
  }

  const decremHandler = () => {
    return dispatch(decrement(2))
  }

  return (
    <div className="App">
      <button onClick={incremHandler}>increment</button>
      <div>{count}</div>
      <button onClick={decremHandler}>decrement</button>
    </div>
  );
}

export default App;
