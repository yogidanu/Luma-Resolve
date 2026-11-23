# Single-Issue Ticket Resolution Workflow

## Overview
For tickets with a single issue (like TKT-1001, TKT-1002, TKT-1003), LumaResolve provides an interactive resolution workflow where agents check off AI-suggested steps as they complete them, then send the response to mark the ticket as resolved.

---

## How Issues Are Identified

### **AI Analysis (Automatic)**
When a ticket is created:
- AI analyzes the customer's message
- Identifies the root cause
- Generates 3-5 suggested resolution steps
- Creates a draft response

**Example from TKT-1001:**
```
Customer message: "Can't access premium features after payment"

AI identifies:
- Root Cause: Payment/permissions sync delay
- Suggested Steps:
  1. Verify user's API key configuration
  2. Guide through permission refresh process
  3. Provide documentation link
```

---

## Resolution Workflow

### **Step-by-Step Process:**

#### **Step 1: Agent Reviews AI Suggestions**
- Agent sees the ticket details
- AI Analysis Card shows root cause and key facts
- Suggested Steps Card displays recommended actions
- Draft Response Card shows pre-written response

**UI State:**
```
Suggested Steps:  [0/3 Complete]
Progress Bar:     [░░░░░░░░░░░░] 0%

☐ Verify user's API key configuration
☐ Guide through permission refresh process  
☐ Provide documentation link
```

---

#### **Step 2: Agent Takes Action & Checks Off Steps**

As the agent works through each step, they click the **circle checkbox** next to each completed action:

**Action Flow:**
```
1. Agent verifies API key in admin panel
   → Clicks checkbox next to Step 1 ✓

2. Agent manually refreshes permissions 
   → Clicks checkbox next to Step 2 ✓

3. Agent prepares documentation link
   → Clicks checkbox next to Step 3 ✓
```

**UI Updates in Real-Time:**
```
After clicking Step 1:
Suggested Steps:  [1/3 Complete]
Progress Bar:     [████░░░░░░░░] 33%

✓ Verify user's API key configuration
☐ Guide through permission refresh process
☐ Provide documentation link

After clicking Step 2:
Suggested Steps:  [2/3 Complete]
Progress Bar:     [████████░░░░] 67%

✓ Verify user's API key configuration
✓ Guide through permission refresh process
☐ Provide documentation link

After clicking Step 3:
Suggested Steps:  [✓ 3/3 Complete]  (green badge)
Progress Bar:     [████████████] 100% (green)

✓ Verify user's API key configuration
✓ Guide through permission refresh process
✓ Provide documentation link
```

---

#### **Step 3: Agent Sends Response**

When ready to respond to the customer, the agent clicks **"Approve & Send"** button on the Draft Response Card.

**What happens:**
```
Agent clicks "Approve & Send" →

FRONTEND:
1. Ticket status changes from "Open" → "Resolved"
2. Success feedback shown to agent

BACKEND (API calls):
3. POST /api/tickets/{ticketId}/send-response
   Body: { 
     message: draft text,
     stepsCompleted: [true, true, true],
     allStepsComplete: true
   }
4. Sends email to customer with the response
5. Updates ticket status to "resolved" in database
6. Adds timeline entry: "Response sent by Agent User"
7. Sends notification to customer
8. Updates dashboard statistics
9. Logs action in audit trail

RESULT:
- Customer receives email with solution
- Ticket marked as resolved
- Dashboard stats updated
- Agent can move to next ticket
```

---

## Key Differences: Single vs Multiple Issues

| Aspect | Single Issue (TKT-1001) | Multiple Issues (TKT-1004) |
|--------|------------------------|---------------------------|
| **Issue Detection** | AI identifies 1 problem | AI identifies 3+ separate problems |
| **Resolution UI** | Suggested Steps Card (checkboxes) | Multiple Issues Card (progress per issue) |
| **Tracking** | Check off steps (1, 2, 3) | Track each issue separately with progress |
| **Progress** | One progress bar (0-100%) | Multiple progress bars (one per issue) |
| **Resolution** | Click "Approve & Send" once | Click "Mark Resolved" per issue, then send |
| **Status** | Open → Resolved | Pending → In Progress → Completed (per issue) |

---

## Real-World Example: TKT-1001 Timeline

### **Complete Resolution Flow:**

```
10:00 AM - Ticket created: "Can't access premium features"
10:01 AM - AI analyzes ticket (automatic)
          → Root cause: Payment/permissions sync delay
          → Suggested 3 steps
          → Generated draft response

10:05 AM - Agent opens ticket (manual)
          → Reviews AI analysis
          → Sees suggested steps

10:07 AM - Agent checks Stripe payment (manual)
          → Payment confirmed: $299
          → ✓ Clicks checkbox for Step 1
          → Backend: POST /api/tickets/TKT-1001/steps/1/complete

10:10 AM - Agent refreshes permissions in admin panel (manual)
          → Permissions updated: Pro → Enterprise
          → ✓ Clicks checkbox for Step 2
          → Backend: POST /api/tickets/TKT-1001/steps/2/complete

10:12 AM - Agent prepares documentation link (manual)
          → Documentation ready
          → ✓ Clicks checkbox for Step 3
          → Backend: POST /api/tickets/TKT-1001/steps/3/complete
          → UI shows: [✓ 3/3 Complete] in green

10:15 AM - Agent reviews draft response (manual)
          → Optionally adjusts tone (clicks "Empathetic")
          → Clicks "Approve & Send"

10:15 AM - System sends response (automatic)
          → Backend: POST /api/tickets/TKT-1001/send-response
          → Email sent to sarah.chen@example.com
          → Ticket status: Open → Resolved
          → Timeline updated: "Response sent by Agent User"
          → Dashboard stats updated: +1 resolved ticket
          → Notification sent

10:16 AM - Customer receives email (automatic)
          → "Hi Sarah, Thank you for upgrading to Enterprise!..."

10:45 AM - Customer confirms (manual)
          → "Thank you! It's working now!"
          → Issue fully resolved ✓
```

---

## Backend Integration (Production)

### **API Endpoints:**

#### **1. Mark Step as Completed**
```javascript
POST /api/tickets/{ticketId}/steps/{stepIndex}/complete

Request Headers:
  Authorization: Bearer {agent_token}

Response:
{
  ticketId: "TKT-1001",
  stepIndex: 0,
  completed: true,
  completedBy: "Agent User",
  completedAt: "2024-12-04T10:07:00Z",
  allStepsComplete: false,
  progress: 33
}
```

#### **2. Send Response & Mark Resolved**
```javascript
POST /api/tickets/{ticketId}/send-response

Request Body:
{
  message: "Hi Sarah, Thank you for upgrading...",
  tone: "empathetic",
  stepsCompleted: [true, true, true],
  allStepsComplete: true
}

Response:
{
  ticketId: "TKT-1001",
  status: "resolved",
  responseSentAt: "2024-12-04T10:15:00Z",
  sentBy: "Agent User",
  emailDelivered: true,
  customerNotified: true
}

Triggers:
1. Send email to customer
2. Update ticket status → "resolved"
3. Add timeline entry
4. Send notification
5. Update dashboard stats
6. Log in audit trail
```

---

## Agent Actions Summary

### **Manual Actions (Agent-Driven):**
1. ✅ **Review AI suggestions** - Read root cause, steps, draft
2. ✅ **Take action on each step** - Actually do the work (fix issue)
3. ✅ **Check off steps** - Click checkbox as each step completes
4. ✅ **Adjust tone (optional)** - Select Formal/Concise/Empathetic/Technical
5. ✅ **Edit response (optional)** - Click "Edit" to modify draft
6. ✅ **Send response** - Click "Approve & Send"

### **System Actions (Automatic):**
1. 🤖 **AI analyzes ticket** - Identifies issue, suggests steps, drafts response
2. 🤖 **Tracks step completion** - Updates progress bar in real-time
3. 🤖 **Sends email** - Delivers response to customer
4. 🤖 **Updates status** - Marks ticket as resolved
5. 🤖 **Logs actions** - Records all activities
6. 🤖 **Updates dashboards** - Refreshes stats and metrics

---

## Optional: Customer Confirmation

After the response is sent, the agent can follow up in the conversation:

```
Agent: "I've resolved your issue. Can you confirm the premium features are working now?"

[Customer confirms in conversation]

Customer: "Yes, everything's working! Thank you!"

System: "✓ Resolution confirmed by customer"
```

---

## Key Points

### **How Issues Get Resolved in Single-Issue Tickets:**

1. ✅ **AI automatically identifies** the issue and suggests steps
2. ✅ **Agent manually performs** each resolution step
3. ✅ **Agent checks off** each step as completed (UI checkboxes)
4. ✅ **System tracks progress** in real-time (progress bar)
5. ✅ **Agent clicks "Approve & Send"** when ready
6. ✅ **System automatically sends** response to customer
7. ✅ **System marks ticket resolved** and updates all records
8. ✅ **Customer receives solution** via email

**The workflow is collaborative: Agent does the work, system tracks and automates.**

---

## Workflow Comparison

### **Single-Issue Resolution:**
```
Open → Agent Reviews → Agent Works Through Steps (checks them off) 
→ Agent Sends Response → Resolved
```

### **Multiple-Issue Resolution:**
```
Open → Agent Reviews → For Each Issue:
  - Agent Starts Issue
  - Agent Updates Progress
  - Agent Marks Resolved
→ All Issues Complete → Agent Sends Response → Resolved
```

Both workflows give agents **full control** while providing **automated tracking and notifications**.
