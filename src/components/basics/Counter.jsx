import React, { Component } from 'react'

export class counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: 0
        }
    }
    ince(){
        this.setState ({ 
            first:this.state.first+1
         })
    }
    dec(){
        this.setState({
            first:this.state.first-1
            })
    }
  render() {
    return (
      <div>
        <button onClick={() => this.ince()}>+</button>
        <button onClick={() => this.dec()}>-</button>

        <p>{this.state.first}</p>
      </div>
    )
  }
}

export default counter