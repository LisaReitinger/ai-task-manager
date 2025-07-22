// ThemeProvider - manages light/dark theme across the app

import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Define the theme types
type Theme = 'light' | 'dark';

// Define what our ThemeContext will provide
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// The Provider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get saved theme from localStorage, or default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  // Apply theme to document when it changes
  useEffect(() => {
    // Add/remove 'dark' class to html element for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 