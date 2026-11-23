import React from 'react';
import {
  LayoutDashboard,
  Ticket,
  BookOpen,
  BarChart3,
  Settings,
  Search,
  Users,
  Moon,
  Sun,
  Keyboard,
  Sparkles,
} from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './ui/command';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string) => void;
  onToggleDarkMode: () => void;
  onOpenKeyboardShortcuts: () => void;
  isDarkMode: boolean;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onToggleDarkMode,
  onOpenKeyboardShortcuts,
  isDarkMode,
}: CommandPaletteProps) {
  const handleSelect = (callback: () => void) => {
    callback();
    onClose();
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => handleSelect(() => onNavigate('dashboard'))}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
            <CommandShortcut>G D</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => onNavigate('tickets'))}>
            <Ticket className="mr-2 h-4 w-4" />
            <span>Tickets</span>
            <CommandShortcut>G T</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => onNavigate('knowledge-base'))}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Knowledge Base</span>
            <CommandShortcut>G K</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => onNavigate('analytics'))}>
            <BarChart3 className="mr-2 h-4 w-4" />
            <span>Analytics</span>
            <CommandShortcut>G A</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => onNavigate('team'))}>
            <Users className="mr-2 h-4 w-4" />
            <span>Team Collaboration</span>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => onNavigate('stageshow-walkthrough'))}>
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span>Stageshow Product Walkthrough</span>
            <CommandShortcut>G S</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => handleSelect(() => onNavigate('settings'))}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(onToggleDarkMode)}>
            {isDarkMode ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</span>
            <CommandShortcut>⌘⇧D</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(onOpenKeyboardShortcuts)}>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard Shortcuts</span>
            <CommandShortcut>⌘/</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => handleSelect(() => alert('Creating new ticket...'))}>
            <Ticket className="mr-2 h-4 w-4" />
            <span>New Ticket</span>
            <CommandShortcut>N</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => handleSelect(() => alert('Opening search...'))}>
            <Search className="mr-2 h-4 w-4" />
            <span>Advanced Search</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
