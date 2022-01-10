import React from 'react';
import { AppContainer } from '../Container';
import { AppFooter } from '../Footer';
import { AppHeader } from '../Header';
import { H1 } from '../../atoms/H1';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <AppHeader className="app-header">
        <H1>⚓️ Sonar React UI</H1>
      </AppHeader>
      <AppContainer className="app-container">{children}</AppContainer>
      <AppFooter className="app-footer">© Romaric Haldenwang - 2022</AppFooter>
    </>
  );
};

export default AppLayout;
