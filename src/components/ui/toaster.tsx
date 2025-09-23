'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

const toasts: Toast[] = [];
const listeners: Array<(toasts: Toast[]) => void> = [];

function addToast(toast: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substring(7);
  const newToast = { id, ...toast };
  toasts.push(newToast);
  listeners.forEach(listener => listener([...toasts]));

  if (toast.duration !== 0) {
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  }
}

function removeToast(id: string) {
  const index = toasts.findIndex(toast => toast.id === id);
  if (index > -1) {
    toasts.splice(index, 1);
    listeners.forEach(listener => listener([...toasts]));
  }
}

export function toast(toast: Omit<Toast, 'id'>) {
  addToast(toast);
}

export function Toaster() {
  const [toastList, setToastList] = useState<Toast[]>([]);

  useEffect(() => {
    listeners.push(setToastList);
    return () => {
      const index = listeners.indexOf(setToastList);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toastList.map(toast => (
        <div
          key={toast.id}
          className={cn(
            'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-slide-up',
            {
              'border-l-4 border-green-500': toast.type === 'success',
              'border-l-4 border-red-500': toast.type === 'error',
              'border-l-4 border-yellow-500': toast.type === 'warning',
              'border-l-4 border-blue-500': toast.type === 'info',
            }
          )}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-1">
                {toast.title && (
                  <p className="text-sm font-medium text-gray-900">
                    {toast.title}
                  </p>
                )}
                {toast.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}