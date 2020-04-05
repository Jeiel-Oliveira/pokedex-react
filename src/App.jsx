import React from 'react';

import Card from './components/card';
import Row from './commom/layout/row'
// import Header from './commom/template/header'

import './css/style.css'


function App() {
  return (
    <div className="App container d-flex justify-content-center h-100">

      <Row extraClass="align-self-center">
        <Card text='James Bond' src={require('./img/pikachu.jpg')} />      
      </Row>      

    </div>
  );
}

export default App;
