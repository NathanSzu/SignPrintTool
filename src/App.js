import React, { useState } from 'react';
import Full from './components/Full';
import Eighth from './components/Eighth';
import Quarter from './components/Quarter'
import './App.css';

function App() {

  const [signType, setSignType] = useState('full')

  return (
    <div className=' position-relative'>
      <header className='container hide-for-print'>
        <nav className='row mt-2'>
          <button className='col-4' onClick={() => {setSignType('full')}}>
            Full Sheet
          </button>
          <button className='col-4' onClick={() => {setSignType('quarter')}}>
            Quarter Sheet
          </button>
          <button className='col-4' onClick={() => {setSignType('eighth')}}>
            Eighth Sheet
          </button>
        </nav>
      </header>
      <main>
        {signType === 'full' ? <Full /> : null}
        {signType === 'quarter' ? <Quarter /> : null}
        {signType === 'eighth' ? <Eighth /> : null}
      </main>
    </div>
  );
}

export default App;
