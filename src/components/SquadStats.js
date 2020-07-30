import React, { Component } from 'react'
import { connect } from 'react-redux'

class SquadStats extends Component {
  strength = () => {
    let s = 0
    this.props.heroes.forEach(element => (s += element.strength))
    return s
  }
  intelligence = () => {
    let s = 0
    this.props.heroes.forEach(element => (s += element.intelligence))
    return s
  }
  speed = () => {
    let s = 0
    this.props.heroes.forEach(element => (s += element.speed))
    return s
  }

  render() {
    return (
      <div>
        <h4> Squad Stats</h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Overall Strength: </b>
            {this.strength()}
          </li>
          <li className='list-group-item'>
            <b>Overall intelligence: </b>
            {this.intelligence()}
          </li>
          <li className='list-group-item'>
            <b>Overall Speed: </b>
            {this.speed()}
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heroes: state.heros,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(SquadStats)
