// LoadingSpinner.tsx - Simple spinning circle for API loading states

// Define what props our component accepts
interface LoadingSpinnerProps {
  message?: string; // Optional custom message, defaults to "Loading..."
}

export default function LoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {/* Spinning circle */}
      <div 
        className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"
        aria-hidden="true"
      ></div>
      
      {/* Loading message for screen readers */}
      <span className="sr-only">{message}</span>
      
      {/* Visible loading text */}
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{message}</p>
    </div>
  );
} 