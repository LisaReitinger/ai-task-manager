// HomePage.tsx - The landing page where users choose to login or register

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to Task-Master AI</h1>
      <h2 className="text-xl text-gray-600">Organize smarter, not harder. Your AI-powered task manager is here to automate, prioritize, and optimize your day.</h2>
      <p className="text-lg text-gray-700 mt-4">Let AI transform how you work. Simply describe your project, and watch as intelligent task generation breaks it down into clear, actionable steps. Track progress effortlessly and stay organized like never before.</p>
      
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
} 