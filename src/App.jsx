import React from 'react';

import Card from './components/card';
// import Header from './commom/template/header'

import './css/style.css'


function App() {
  return (
    <div className="App container p-5">
      <div className="article">
        
        <Card text='James Bond' src={require('./img/pikachu.jpg')} />              
                
      </div>      
    </div>

  );
}

export default App;
