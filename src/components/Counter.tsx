import React from 'react'
import { useStore } from '../store/useStore'

const Counter = () => {
  const count = useStore((state) => state.count)
  const increaseCount = useStore((state) => state.increament)
  const decreaseCount =  useStore((state) => state.decreament)

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increaseCount}>+</button>
        <button data-testid="decreaseBtn" onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Counter