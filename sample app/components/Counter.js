import React from 'react'
import Button from './Button'

const Counter = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    }
  },

  increment: function () {
    this.setState({
      count: this.state.count + 1
    })
  },

  decrement: function () {
    this.setState({
      count: this.state.count - 1
    })
  },

  render: function () {
    return (
      <div className='counter'>
        <Button label='+' onClick={this.increment} />
        <h1>
          {this.state.count}
        </h1>
        <Button label='-' onClick={this.decrement} />
      </div>
    )
  }
})

export default Counter
