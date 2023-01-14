import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementbyAmount } from './counterSlice';
function Counter() {
  const value=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>React Redux</h3>
      <div>
      <h3>{value}</h3>
      <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementbyAmount(10))}>Increment by Amount</button>

      </div>
      </div>
    </div>
  );
}

export default Counter;
