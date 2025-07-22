// AuthProvider - manages user authentication state across the app

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Define what a User looks like
interface User {
  id: string;
  name: string;
  email: string;
}

// Define what our AuthContext will provide to components
interface AuthContextType {
  user: User | null;           // Current user (null if not logged in)
  isLoading: boolean;          // Is login/logout in progress?
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
}

// Create the Context (the "data pipeline")
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The Provider Component - this wraps your app and provides the data
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // State to track current user and loading status
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Login function - placeholder for now
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // TODO: Replace with real API call
    console.log('Login attempted:', email);
    // Simulate a successful login for now
    setUser({ id: '1', name: 'Test User', email });
    setIsLoading(false);
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  // Register function - placeholder for now
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    // TODO: Replace with real API call
    console.log('Register attempted:', name, email);
    setIsLoading(false);
  };

  // The value object that gets shared with all components
  const value = {
    user,
    isLoading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook - components use this to access the auth data
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 