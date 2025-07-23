// Modal.tsx - Reusable modal component using Headless UI

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import type { ReactNode } from 'react';

// Define what props our Modal accepts
interface ModalProps {
  isOpen: boolean;          // Is modal currently visible?
  onClose: () => void;      // Function to call when modal should close
  title: string;            // Modal header text
  children: ReactNode;      // Content inside the modal
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop - dark overlay behind modal */}
      <div className="fixed inset-0 bg-black/50 dark:bg-black/70" aria-hidden="true" />

      {/* Full screen container to center modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
          {/* Modal header */}
          <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4 bg-gray-50 dark:bg-gray-800 rounded-t-xl">
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </DialogTitle>
          </div>

          {/* Modal content */}
          <div className="px-6 py-6 text-gray-700 dark:text-gray-300">
            {children}
          </div>

          {/* Close button */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-end bg-gray-50 dark:bg-gray-800 rounded-b-xl">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
} 