import React, { useState } from 'react';
import Card from './components/Card';
import PCard from './components/Card';
import './App.css';
import Form from './components/Form';
import { Switch } from '@mui/material';

const App = () => {
  const [showPCard, setShowPCard] = useState(false);

  const togglePCard = () => {
    setShowPCard(!showPCard);
  };

  return (
    <div className='App'>
      <Form />
      <div className='card'>
        <Switch
          checked={showPCard}
          onChange={togglePCard}
          inputProps={{ 'aria-label': 'Toggle PCard' }}
        />
        {showPCard && <PCard />}
      </div>
    </div>
  );
};

export default App;
