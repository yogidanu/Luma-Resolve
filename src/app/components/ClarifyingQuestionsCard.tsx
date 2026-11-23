import React, { useState } from 'react';
import { Sparkles, Send, Edit3, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface ClarifyingQuestionsCardProps {
  questions: string[];
  onSendToCustomer: (editedMessage: string) => void;
  onDismiss: () => void;
}

export function ClarifyingQuestionsCard({ 
  questions, 
  onSendToCustomer,
  onDismiss 
}: ClarifyingQuestionsCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const defaultMessage = `Hi there,

Thank you for reporting this issue. To help me diagnose the problem accurately, could you please provide the following information:

${questions.map((q, idx) => `${idx + 1}. ${q}`).join('\n\n')}

This additional context will help me identify the root cause and provide you with the best solution.

Best regards`;

  const [editedMessage, setEditedMessage] = useState(defaultMessage);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSend = () => {
    onSendToCustomer(editedMessage);
  };

  return (
    <Card className="border-2 border-primary bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="w-5 h-5 text-primary" />
          AI-Generated Clarifying Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-card border border-border rounded-lg">
          <div className="text-sm text-muted-foreground mb-3">
            Send these questions to gather more context and increase AI confidence:
          </div>
          
          {!isEditing ? (
            <div className="space-y-3">
              {questions.map((question, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-muted rounded-md">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                    {idx + 1}
                  </div>
                  <div className="flex-1 text-sm text-foreground pt-0.5">
                    {question}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Textarea
              value={editedMessage}
              onChange={(e) => setEditedMessage(e.target.value)}
              className="min-h-[300px] font-mono text-sm"
              placeholder="Edit the message before sending..."
            />
          )}
        </div>

        <div className="flex items-center gap-3">
          {!isEditing ? (
            <>
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                className="flex-1"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Message
              </Button>
              <Button
                onClick={handleCopy}
                variant="outline"
                className="flex-1"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy to Clipboard
                  </>
                )}
              </Button>
              <Button
                onClick={handleSend}
                className="flex-1 bg-primary"
              >
                <Send className="w-4 h-4 mr-2" />
                Send to Customer
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setIsEditing(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="flex-1"
              >
                Save Changes
              </Button>
              <Button
                onClick={handleSend}
                className="flex-1 bg-primary"
              >
                <Send className="w-4 h-4 mr-2" />
                Send to Customer
              </Button>
            </>
          )}
        </div>

        <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
          <div className="flex items-start gap-2 text-xs text-foreground">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <strong>Next Steps:</strong> Once the customer responds with this information, 
              AI will re-analyze the ticket with the new context. If confidence increases above 60%, 
              AI suggestions will be automatically generated.
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={onDismiss}
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
          >
            Dismiss
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
