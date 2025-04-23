import React from 'react';
import { RiskMonitor } from './components/RiskMonitor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <RiskMonitor />
      </main>
      <Footer />
    </div>
  );
}

export default App;