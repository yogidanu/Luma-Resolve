import React, { useState } from 'react';
import { Send, Trash2, User } from 'lucide-react';

interface InternalNote {
  id: string;
  text: string;
  author: string;
  authorAvatar: string;
  timestamp: string;
}

interface InternalNotesCardProps {
  ticketId: string;
  initialNotes?: InternalNote[];
}

export function InternalNotesCard({ 
  ticketId,
  initialNotes = [
    {
      id: '1',
      text: 'Customer has been charged twice - confirmed with Stripe. Processing refund now.',
      author: 'Agent User',
      authorAvatar: 'AU',
      timestamp: '1 hour ago'
    },
    {
      id: '2',
      text: 'Refund processed. Transaction ID: txn_1234567890. Should appear in 5-7 business days.',
      author: 'Agent User',
      authorAvatar: 'AU',
      timestamp: '45 mins ago'
    }
  ]
}: InternalNotesCardProps) {
  const [notes, setNotes] = useState<InternalNote[]>(initialNotes);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const newNote: InternalNote = {
      id: Date.now().toString(),
      text: noteText,
      author: 'Agent User',
      authorAvatar: 'AU',
      timestamp: 'Just now'
    };

    setNotes([...notes, newNote]);
    setNoteText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleAddNote();
    }
  };

  const handleDeleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  return (
    <div className="bg-card relative rounded-[10px] border border-border shadow-sm w-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold text-[16px] text-foreground leading-[20px]">Internal Notes</h3>
        <div className="bg-amber-500/10 rounded-full px-3 py-1">
          <p className="font-medium text-[12px] text-amber-600 dark:text-amber-400 leading-[16px]">Team Only</p>
        </div>
      </div>

      {/* Notes List */}
      <div className="px-6 py-4 space-y-4 max-h-[400px] overflow-y-auto">
        {notes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-[14px]">No internal notes yet. Add one below.</p>
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-amber-500/5 rounded-[8px] p-4 border border-amber-500/20 group relative">
              <div className="flex items-start gap-3">
                <div className="size-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">{note.authorAvatar}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-[13px] text-foreground">{note.author}</p>
                    <p className="text-[11px] text-muted-foreground">{note.timestamp}</p>
                  </div>
                  <p className="text-[14px] text-foreground/90 leading-[20px]">{note.text}</p>
                </div>
                <button
                  onClick={() => handleDeleteNote(note.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity size-7 rounded-md hover:bg-amber-500/20 flex items-center justify-center shrink-0"
                >
                  <Trash2 size={14} className="text-amber-600 dark:text-amber-400" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Note Input */}
      <div className="px-6 py-4 border-t border-border bg-muted/30">
        <div className="space-y-3">
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add an internal note (only visible to your team)..."
            className="w-full bg-card border border-border rounded-[6.8px] px-3 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-none"
            rows={3}
          />
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground">Cmd+Enter to send</p>
            <button
              onClick={handleAddNote}
              disabled={!noteText.trim()}
              className="bg-amber-600 hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed rounded-[6.8px] px-4 py-2 flex items-center gap-2 transition-colors"
            >
              <Send size={14} className="text-white" />
              <p className="font-medium text-[14px] text-white">Add Note</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
