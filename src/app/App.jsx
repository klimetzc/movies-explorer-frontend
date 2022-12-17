import React from 'react';
import '../shared/vendor/fonts/inter.scss';
import './App.scss';

import RouterPages from '../pages';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <RouterPages />
      </div>
    </div>
  );
}

export default App;
