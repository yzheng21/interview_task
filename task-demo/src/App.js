import React from 'react';
import './App.css';
import KForm from './components/form/KForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <KForm />
      </Provider> 
    </div>
  );
}

export default App;
