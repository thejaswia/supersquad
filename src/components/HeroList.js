import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeCharacterById } from '../actions'
import { bindActionCreators } from 'redux'

class HeroList extends Component {
  render() {
    console.log('this.props HeroList', this.props)
    return (
      <div>
        <h4> Your Hero Squad: </h4>
        <ul className='list-group'>
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className='list-group-item'>
                <div className='list-item'>{hero.name}</div>
                <div
                  onClick={() => this.props.removeCharacterById(hero.id)}
                  className='list-item btn-right'
                >
                  X
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  heroes: state.heros,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeCharacterById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList)
