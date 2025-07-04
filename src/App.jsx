import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FilterComponent from './components/Filter'
import { ThemeProvider } from './components/Theme';
import useTheme from './components/useTheme';
import Menu from './components/Menu';

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { id: 1, name: 'Adam', score: 100 },
    { id: 2, name: 'Eva', score: 102 },
    { id: 3, name: 'Inger', score: 0 },
  ];

  return (
    <div>
      <a href='#main-content' className='sr-only focus:not-sr-only'>Hoppa till huvudinnehåll</a>
      <Header role="banner" aria-label='Huvudheader' />
      <button 
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        aria-label={`Växla till ${theme === 'light' ? 'Mörkt' : 'Ljust'} Tema`}
      >
        {theme === 'light' ? 'Mörkt' : 'Ljust'} Tema
      </button>
      <main id='main-content'>
        <FilterComponent items={items} />
        <Outlet />
      </main>
      <Footer role='contentinfo' aria-label='Sidfot' />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
};

export default App
