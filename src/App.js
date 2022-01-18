import Header from './components/Header'
import React from 'react';
const App = () =>
{
  return (
    <div className="container">
      <Header title="Task manager" />
    </div>
  );
}

const headingStyle = { color: 'red', backgroundColor: 'green' }
export default App;
