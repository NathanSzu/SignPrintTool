import React, { useState } from 'react'
import './App.css';

function App() {

  const [signType, setSignType] = useState("full")

  return (
    <div className="">
      <header className="container">
        <nav className="row mt-2">
          <button className="col-4" onClick={() => {setSignType("full")}}>
            Full Sheet
          </button>
          <button className="col-4" onClick={() => {setSignType("half")}}>
            Half Sheet
          </button>
          <button className="col-4" onClick={() => {setSignType("quarter")}}>
            Quarter Sheet
          </button>
        </nav>
      </header>
      <main>
        {signType}
      </main>
    </div>
  );
}

export default App;
