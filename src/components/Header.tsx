// Header.tsx - Smart header component that adapts to different pages

import { useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeProvider';

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Smart logic - determine what to show based on current page
  const isHomePage = location.pathname === '/';
  const isDashboardPage = location.pathname === '/dashboard';

  return (
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">TaskMaster AI</h1>
      
      {/* Smart content - changes based on current page */}
      {isHomePage && <span className="text-blue-600 dark:text-blue-400">Welcome! 👋</span>}
      {isDashboardPage && <span className="text-green-600 dark:text-green-400">Your Dashboard 📊</span>}
      
      <button 
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-1 rounded text-lg"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
} 


