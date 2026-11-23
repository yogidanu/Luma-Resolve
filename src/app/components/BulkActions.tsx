import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { CheckSquare, Square, UserPlus, Tag, Archive, Trash2, Mail, FileText, AlertTriangle } from 'lucide-react';
import { mockTickets } from '../data/mockData';

interface BulkActionsProps {
  onClose: () => void;
}

export function BulkActions({ onClose }: BulkActionsProps) {
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);
  const [bulkAction, setBulkAction] = useState<string>('');

  const toggleTicket = (ticketId: string) => {
    setSelectedTickets(prev =>
      prev.includes(ticketId)
        ? prev.filter(id => id !== ticketId)
        : [...prev, ticketId]
    );
  };

  const toggleAll = () => {
    if (selectedTickets.length === mockTickets.length) {
      setSelectedTickets([]);
    } else {
      setSelectedTickets(mockTickets.map(t => t.id));
    }
  };

  const handleBulkAction = (action: string) => {
    setBulkAction(action);
    setShowConfirmation(action);
  };

  const executeBulkAction = () => {
    // Execute the action
    setShowConfirmation(null);
    setSelectedTickets([]);
    setBulkAction('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[20px] mb-1">Bulk Actions</h2>
              <p className="text-[14px] text-[#5E5E5E]">
                {selectedTickets.length} of {mockTickets.length} tickets selected
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#5E5E5E] hover:text-[#1F1F1F] text-[24px]"
            >
              ×
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <Button
              onClick={() => handleBulkAction('assign')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <UserPlus size={16} />
              Assign
            </Button>
            <Button
              onClick={() => handleBulkAction('tag')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <Tag size={16} />
              Add Tags
            </Button>
            <Button
              onClick={() => handleBulkAction('archive')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <Archive size={16} />
              Archive
            </Button>
            <Button
              onClick={() => handleBulkAction('delete')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2 hover:bg-[#FFE5E5] hover:text-[#FF4D4D]"
            >
              <Trash2 size={16} />
              Delete
            </Button>
            <Button
              onClick={() => handleBulkAction('send-update')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              Send Update
            </Button>
            <Button
              onClick={() => handleBulkAction('export')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <FileText size={16} />
              Export
            </Button>
            <Button
              onClick={() => handleBulkAction('priority')}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              <AlertTriangle size={16} />
              Set Priority
            </Button>
            <Button
              onClick={() => setSelectedTickets([])}
              disabled={selectedTickets.length === 0}
              variant="secondary"
              className="flex items-center justify-center gap-2"
            >
              Clear Selection
            </Button>
          </div>

          {/* Ticket List */}
          <div className="border border-[#D7D7DA] rounded-[8px] overflow-hidden">
            {/* Header */}
            <div className="bg-[#F6F6F7] p-4 flex items-center gap-4 border-b border-[#D7D7DA]">
              <button onClick={toggleAll} className="text-[#4C84FF]">
                {selectedTickets.length === mockTickets.length ? (
                  <CheckSquare size={20} />
                ) : (
                  <Square size={20} />
                )}
              </button>
              <div className="flex-1 grid grid-cols-5 gap-4 text-[12px] text-[#5E5E5E]">
                <div>Ticket ID</div>
                <div className="col-span-2">Subject</div>
                <div>Customer</div>
                <div>Priority</div>
              </div>
            </div>

            {/* Tickets */}
            <div className="divide-y divide-[#D7D7DA]">
              {mockTickets.map(ticket => (
                <div
                  key={ticket.id}
                  className={`p-4 flex items-center gap-4 hover:bg-[#F6F6F7] transition-colors ${
                    selectedTickets.includes(ticket.id) ? 'bg-[#F0F4FF]' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleTicket(ticket.id)}
                    className="text-[#4C84FF]"
                  >
                    {selectedTickets.includes(ticket.id) ? (
                      <CheckSquare size={20} />
                    ) : (
                      <Square size={20} />
                    )}
                  </button>
                  <div className="flex-1 grid grid-cols-5 gap-4 text-[14px]">
                    <div className="text-[#4C84FF]">{ticket.id}</div>
                    <div className="col-span-2 truncate">{ticket.subject}</div>
                    <div className="truncate">{ticket.customer.name}</div>
                    <div>
                      <span className={`px-2 py-0.5 rounded-[4px] text-[12px] ${
                        ticket.priority === 'high'
                          ? 'bg-[#FFE5E5] text-[#FF4D4D]'
                          : ticket.priority === 'medium'
                          ? 'bg-[#FFF4E6] text-[#FFA500]'
                          : 'bg-[#F0F4FF] text-[#4C84FF]'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Confirmation Modal */}
          {showConfirmation && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
              <Card className="p-6 w-full max-w-md">
                <h3 className="text-[18px] mb-4">Confirm Bulk Action</h3>
                
                {bulkAction === 'assign' && (
                  <div className="space-y-4">
                    <p className="text-[14px] text-[#5E5E5E]">
                      Assign {selectedTickets.length} tickets to:
                    </p>
                    <select className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px]">
                      <option>Sarah Johnson</option>
                      <option>Mike Chen</option>
                      <option>Emma Davis</option>
                      <option>James Wilson</option>
                    </select>
                  </div>
                )}

                {bulkAction === 'tag' && (
                  <div className="space-y-4">
                    <p className="text-[14px] text-[#5E5E5E]">
                      Add tags to {selectedTickets.length} tickets:
                    </p>
                    <input
                      type="text"
                      placeholder="Enter tags (comma-separated)"
                      className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px]"
                    />
                  </div>
                )}

                {bulkAction === 'archive' && (
                  <p className="text-[14px] text-[#5E5E5E]">
                    Archive {selectedTickets.length} tickets? They will be moved to the archive and marked as resolved.
                  </p>
                )}

                {bulkAction === 'delete' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-[#FFE5E5] rounded-[6px]">
                      <AlertTriangle size={20} className="text-[#FF4D4D] mt-0.5" />
                      <div>
                        <div className="text-[14px] text-[#FF4D4D] mb-1">Warning: Permanent Action</div>
                        <div className="text-[13px] text-[#5E5E5E]">
                          This will permanently delete {selectedTickets.length} tickets. This action cannot be undone.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {bulkAction === 'send-update' && (
                  <div className="space-y-4">
                    <p className="text-[14px] text-[#5E5E5E]">
                      Send update email to {selectedTickets.length} customers:
                    </p>
                    <textarea
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px] min-h-[120px]"
                    />
                  </div>
                )}

                {bulkAction === 'export' && (
                  <div className="space-y-4">
                    <p className="text-[14px] text-[#5E5E5E]">
                      Export {selectedTickets.length} tickets to:
                    </p>
                    <select className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px]">
                      <option>CSV Format</option>
                      <option>JSON Format</option>
                      <option>PDF Report</option>
                    </select>
                  </div>
                )}

                {bulkAction === 'priority' && (
                  <div className="space-y-4">
                    <p className="text-[14px] text-[#5E5E5E]">
                      Set priority for {selectedTickets.length} tickets:
                    </p>
                    <select className="w-full px-4 py-2 border border-[#D7D7DA] rounded-[6px] text-[14px]">
                      <option>High Priority</option>
                      <option>Medium Priority</option>
                      <option>Low Priority</option>
                    </select>
                  </div>
                )}

                <div className="flex justify-end gap-2 mt-6">
                  <Button variant="secondary" onClick={() => setShowConfirmation(null)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={executeBulkAction}
                    className={bulkAction === 'delete' ? 'bg-[#FF4D4D] hover:bg-[#E63D3D]' : ''}
                  >
                    {bulkAction === 'delete' ? 'Delete Permanently' : 'Confirm'}
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
