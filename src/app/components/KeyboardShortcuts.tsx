import React, { useEffect, useState } from 'react';
import { Command, Search, Keyboard, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Separator } from './ui/separator';

interface KeyboardShortcutsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function KeyboardShortcuts({ isOpen, onClose }: KeyboardShortcutsProps) {
  const shortcuts = [
    {
      category: 'Navigation',
      items: [
        { keys: ['⌘', 'K'], description: 'Open command palette' },
        { keys: ['G', 'D'], description: 'Go to Dashboard' },
        { keys: ['G', 'T'], description: 'Go to Tickets' },
        { keys: ['G', 'K'], description: 'Go to Knowledge Base' },
        { keys: ['G', 'A'], description: 'Go to Analytics' },
        { keys: ['ESC'], description: 'Close modal/Go back' },
      ],
    },
    {
      category: 'Tickets',
      items: [
        { keys: ['N'], description: 'New ticket' },
        { keys: ['⌘', 'Enter'], description: 'Send response' },
        { keys: ['⌘', 'E'], description: 'Edit response' },
        { keys: ['⌘', 'Shift', 'A'], description: 'Select all tickets' },
        { keys: ['⌘', 'B'], description: 'Bulk actions' },
        { keys: ['↑', '↓'], description: 'Navigate tickets' },
      ],
    },
    {
      category: 'AI Assistant',
      items: [
        { keys: ['⌘', 'I'], description: 'View AI reasoning' },
        { keys: ['⌘', 'Shift', 'R'], description: 'Regenerate response' },
        { keys: ['⌘', 'Shift', 'T'], description: 'Toggle tone' },
      ],
    },
    {
      category: 'General',
      items: [
        { keys: ['⌘', '/'], description: 'Toggle keyboard shortcuts' },
        { keys: ['⌘', 'Shift', 'D'], description: 'Toggle dark mode' },
        { keys: ['⌘', ','], description: 'Open settings' },
      ],
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard size={20} />
            Keyboard Shortcuts
          </DialogTitle>
          <DialogDescription>
            Navigate faster with these keyboard shortcuts
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {shortcuts.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                {section.category}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between py-2"
                  >
                    <span className="text-sm">{item.description}</span>
                    <div className="flex items-center gap-1">
                      {item.keys.map((key, keyIndex) => (
                        <React.Fragment key={keyIndex}>
                          <kbd className="kbd min-w-[24px] text-center">
                            {key}
                          </kbd>
                          {keyIndex < item.keys.length - 1 && (
                            <span className="text-muted-foreground text-xs">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {index < shortcuts.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Hook for keyboard shortcuts
export function useKeyboardShortcuts(handlers: Record<string, () => void>) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // Command palette: Cmd/Ctrl + K
      if (cmdOrCtrl && e.key === 'k') {
        e.preventDefault();
        handlers['cmd+k']?.();
      }

      // Send response: Cmd/Ctrl + Enter
      if (cmdOrCtrl && e.key === 'Enter') {
        e.preventDefault();
        handlers['cmd+enter']?.();
      }

      // Edit response: Cmd/Ctrl + E
      if (cmdOrCtrl && e.key === 'e') {
        e.preventDefault();
        handlers['cmd+e']?.();
      }

      // View AI reasoning: Cmd/Ctrl + I
      if (cmdOrCtrl && e.key === 'i') {
        e.preventDefault();
        handlers['cmd+i']?.();
      }

      // Toggle dark mode: Cmd/Ctrl + Shift + D
      if (cmdOrCtrl && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        handlers['cmd+shift+d']?.();
      }

      // Keyboard shortcuts: Cmd/Ctrl + /
      if (cmdOrCtrl && e.key === '/') {
        e.preventDefault();
        handlers['cmd+/']?.();
      }

      // Select all: Cmd/Ctrl + Shift + A
      if (cmdOrCtrl && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        handlers['cmd+shift+a']?.();
      }

      // Bulk actions: Cmd/Ctrl + B
      if (cmdOrCtrl && e.key === 'b') {
        e.preventDefault();
        handlers['cmd+b']?.();
      }

      // Settings: Cmd/Ctrl + ,
      if (cmdOrCtrl && e.key === ',') {
        e.preventDefault();
        handlers['cmd+,']?.();
      }

      // Escape
      if (e.key === 'Escape') {
        handlers['escape']?.();
      }

      // Single key shortcuts (without modifiers)
      if (!cmdOrCtrl && !e.shiftKey && !e.altKey) {
        // N - New ticket
        if (e.key === 'n' && e.target === document.body) {
          e.preventDefault();
          handlers['n']?.();
        }

        // G + D - Go to dashboard (combo)
        if (e.key === 'g') {
          const nextKey = new Promise<string>((resolve) => {
            const handler = (e2: KeyboardEvent) => {
              document.removeEventListener('keydown', handler);
              resolve(e2.key);
            };
            document.addEventListener('keydown', handler);
            setTimeout(() => {
              document.removeEventListener('keydown', handler);
              resolve('');
            }, 1000);
          });

          nextKey.then((key) => {
            if (key === 'd') handlers['g+d']?.();
            if (key === 't') handlers['g+t']?.();
            if (key === 'k') handlers['g+k']?.();
            if (key === 'a') handlers['g+a']?.();
          });
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handlers]);
}
