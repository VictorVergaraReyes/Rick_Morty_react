import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CharacterList from "./components/CharacterList";

function App() {
  return <div className='bg-dark text-white'>
    <h1 className='text-center display-1 py-4'>Rick & Morty</h1>
    <CharacterList/>
    </div>

}

export default App;