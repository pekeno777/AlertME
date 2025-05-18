import { RiskMonitor } from './components/RiskMonitor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <Hero />
        <RiskMonitor />
      </main>
      <Footer />
    </div>
  );
}

export default App;