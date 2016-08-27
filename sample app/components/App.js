import React from 'react'
import Counter from './Counter'

const App = () => {
  return (
    <div className='app'>
      <Counter maximum={10} minimum={0} />
    </div>
  )
}

export default App
