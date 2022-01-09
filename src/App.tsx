import React from 'react';
import AppLayout from './components/organisms/Layout';
import './App.css';
import BoardGrid from './components/molecules/BoardGrid';

const App = () => {
  const handleCellClick = (row: number, column: number) => {
    console.log(`cell (${row},${column}) has been clicked !`);
  };
  return (
    <div className="App">
      <AppLayout>
        <BoardGrid
          rows={10}
          columns={10}
          onCellClick={handleCellClick}
        ></BoardGrid>
      </AppLayout>
    </div>
  );
};

export default App;
