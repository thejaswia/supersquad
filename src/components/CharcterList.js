import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

export class CharcterList extends Component {
  render() {
    console.log('this.props CharcterList', this.props)
    return (
      <div>
        <h4>Characters</h4>

        <ul className='list-group'>
          {this.props.characters.map(character => {
            return (
              <li key={character.id} className='list-group-item'>
                <div className='list-item'>{character.name}</div>
                <div
                  onClick={() => this.props.addCharacterById(character.id)}
                  className='list-item btn-right'
                >
                  +
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
  characters: state.characters,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addCharacterById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharcterList)
