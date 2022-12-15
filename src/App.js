import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {


  const root = ReactDOM.createRoot(document.getElementById('root'));
    let localtime = new Date();
    let qatar = new Date(localtime.getTime() + (3600000 * 9));
    const titulo = React.createElement(
      'h1',
      {},
      'La hora es: '
    );
    root.render(titulo);
    
      const element = (
        <div className="App">
          <header className="App-header">
            <h1>La hora es: </h1>
            <h2>En Mexico: {new Date().toLocaleTimeString('es-MX')}</h2>
            <h2>En Qatar: {qatar.toLocaleTimeString('es-MX')}</h2>


          </header>
        </div>

      );
    root.render(element);

  
}

export default App;
