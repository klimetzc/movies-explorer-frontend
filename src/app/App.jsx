import React from 'react';
import '../shared/vendor/fonts/inter.scss';
import './App.scss';

import RouterPages from '../pages';

function App() {
  return (
    <div className="App">
      <main className="App__container">
        <RouterPages />
      </main>
    </div>
  );
}

export default App;
