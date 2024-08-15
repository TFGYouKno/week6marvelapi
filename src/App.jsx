import React from 'react'
import './App.css'
import { useState } from 'react'
import CharacterList from './assets/components/CharacterList'
import CharacterDetail from './assets/components/CharacterDetail'

function App() {
  const [searchId, setSearchId] = useState('');

  return (
    <>
      <CharacterList setSearchId={setSearchId}/>
      <CharacterDetail />
    </>
  )
}

export default App