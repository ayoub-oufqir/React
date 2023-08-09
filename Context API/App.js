import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    // We wrap components that need the context inside the provider (Header and Content in this case)
    <ThemeProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
