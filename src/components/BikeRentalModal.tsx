import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import BikeRentalForm from './BikeRentalForm';

interface BikeRentalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBikeType?: string;
}

export default function BikeRentalModal({ isOpen, onClose, defaultBikeType = 'electric' }: BikeRentalModalProps) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div 
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
              aria-label="Close"
            >
              <span className="sr-only">Zamknij</span>
              <X size={24} />
            </button>
          </div>

          <div className="px-4 pt-5 pb-4 sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-6 text-center" id="modal-title">
                  Zarezerwuj Rower
                </h3>
                <BikeRentalForm isModal={true} onClose={onClose} defaultBikeType={defaultBikeType} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 