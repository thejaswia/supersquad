import React from 'react'
import CharcterList from './components/CharcterList'
import HeroList from './components/HeroList'
import SquadStats from './components/SquadStats'
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>SuperSquad App</h1>
      <div className='col-md-4'>
        <CharcterList />
      </div>
      <div className='col-md-4'>
        <HeroList />
      </div>
      <div className='col-md-4'>
        <SquadStats />
      </div>
    </div>
  )
}

export default App
