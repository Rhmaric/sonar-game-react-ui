import React from 'react';
import AppLayout from './components/organisms/Layout';
import { StoreProvider } from 'easy-peasy';
import { appStore } from './store';
import SonarBoard from './components/organisms/SonarBoard';

const App = () => {
  return (
    <StoreProvider store={appStore}>
      <AppLayout>
        <SonarBoard></SonarBoard>
      </AppLayout>
    </StoreProvider>
  );
};

export default App;
