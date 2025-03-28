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
    { id: 1, name: 'Item 1', isActive: true },
    { id: 2, name: 'Item 2', isActive: false },
  ];

  return (
    <div>
      <Header />
      <button onClick={toggleTheme} className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded">
        Växla till {theme === 'light' ? 'Mörkt' : 'Ljust'} Tema
      </button>
      <FilterComponent items={items} />
      <Outlet />
      <Footer />
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
