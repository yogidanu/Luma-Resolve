import { useEffect } from 'react';

export interface Shortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  description: string;
  action: () => void;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[], enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey;
        const altMatch = shortcut.alt ? event.altKey : !event.altKey;

        if (
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          ctrlMatch &&
          shiftMatch &&
          altMatch
        ) {
          event.preventDefault();
          shortcut.action();
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts, enabled]);
}

// Predefined shortcuts for common actions
export const COMMON_SHORTCUTS = {
  SEARCH: { key: 'k', ctrl: true, description: 'Search tickets' },
  NEW_TICKET: { key: 'n', ctrl: true, description: 'Create new ticket' },
  NEXT_TICKET: { key: 'j', description: 'Next ticket' },
  PREV_TICKET: { key: 'k', description: 'Previous ticket' },
  SEND_RESPONSE: { key: 'Enter', ctrl: true, description: 'Send response' },
  SAVE_DRAFT: { key: 's', ctrl: true, description: 'Save draft' },
  CLOSE_MODAL: { key: 'Escape', description: 'Close modal' },
  SHOW_SHORTCUTS: { key: '?', shift: true, description: 'Show shortcuts' },
  TOGGLE_AI: { key: 'a', ctrl: true, description: 'Toggle AI assistant' },
  BULK_SELECT: { key: 'b', ctrl: true, description: 'Bulk actions' },
};
