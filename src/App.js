import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {actions} from './store/index'
function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();
  const increment = ()=>{
    dispatch(actions.increment());
  }
  const decrement = ()=>{
    dispatch(actions.decrement());
  }
  const addBy = ()=>{
    dispatch(actions.addBy(100))
  }
  const subBy = ()=>{
    dispatch(actions.subBy(100))
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={subBy}>Sub by 100</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add by 100</button>
    </div>
  );
}

export default App;
