# Multiple Issues Resolution Workflow

## Overview
When a ticket contains multiple distinct issues (like TKT-1004), LumaResolve's AI automatically identifies and separates them into individual trackable problems, each with its own resolution workflow.

---

## How Issues Are Identified

### 1. **AI Analysis (Automatic)**
When a ticket is created:
- AI scans the customer's message for multiple distinct problems
- Identifies separate root causes for each issue
- Creates individual tracking entries in the `multipleIssues` array
- Each issue gets: ID, title, root cause, resolution plan, estimated time

**Example from TKT-1004:**
```
Original message: "We're experiencing several critical issues: 
1) Team members can't log in
2) Project data is missing
3) Platform is running slow"

AI identifies 3 separate issues →
- Issue #1: Authentication failures
- Issue #2: Missing project data  
- Issue #3: Performance degradation
```

---

## How Issues Get Resolved

### **Workflow Steps:**

#### **Step 1: Issue Status = "Pending"**
- Initial state when AI identifies the issue
- Agent sees the issue card with a **"Start"** button
- No action taken yet

**Agent Action:**
```
Agent clicks "Start" button →
  - Status changes to "In Progress"
  - Progress set to 10%
  - Logged in system: "Agent started working on Issue #1"
```

---

#### **Step 2: Issue Status = "In Progress"**
Agent actively works on the issue and has two options:

##### **Option A: Update Progress (Manual)**
As the agent takes actions, they click **"Update Progress"** to increment completion:
- Each click adds 10% to progress (capped at 90%)
- Helps track work-in-progress
- Example: "Adjusting session timeout..." → 30%, "Testing fix..." → 60%

**When to update:**
- After completing substeps of the resolution
- To communicate progress to team/customer
- Before switching to another issue

##### **Option B: Mark as Resolved**
When the agent completes their fix, they click **"Mark Resolved"**:
```
Agent clicks "Mark Resolved" →
  - Status changes to "Completed"
  - Progress set to 100%
  - Logged: "Issue #1 resolved by Agent User"
  - (Optional) Customer notification sent
  - Entry added to conversation timeline
```

---

#### **Step 3: Issue Status = "Completed"**
- Green checkmark displayed
- Progress bar shows 100%
- No further action needed
- Customer can confirm in conversation

---

## Real-World Example: TKT-1004

### **Issue #1: Authentication Failures**

```
Timeline:
10:00 AM - AI identifies issue (Status: Pending)
10:05 AM - Agent clicks "Start" (Status: In Progress, 10%)
10:07 AM - Agent adjusts session timeout in admin panel
10:08 AM - Agent tests login with test account - SUCCESS
10:10 AM - Agent clicks "Mark Resolved" (Status: Completed, 100%)
10:11 AM - System adds to conversation: "✓ Issue #1 resolved - Authentication fixed"
```

### **Issue #2: Missing Data**

```
Timeline:
10:00 AM - AI identifies issue (Status: Pending)
10:12 AM - Agent clicks "Start" (Status: In Progress, 10%)
10:15 AM - Agent initiates manual data resync
10:20 AM - Agent clicks "Update Progress" (30%)
10:25 AM - Agent monitors sync progress
10:30 AM - Agent clicks "Update Progress" (60%)
10:35 AM - Sync completes, agent verifies data
10:36 AM - Agent clicks "Mark Resolved" (Status: Completed, 100%)
```

### **Issue #3: Performance Issues**

```
Timeline:
10:00 AM - AI identifies issue (Status: Pending)
10:37 AM - Agent clicks "Start" (Status: In Progress, 10%)
10:40 AM - Agent escalates to infrastructure team
10:45 AM - Infrastructure team investigates CDN config
11:20 AM - Fix deployed by infrastructure
11:22 AM - Agent tests page load times - FIXED
11:23 AM - Agent clicks "Mark Resolved" (Status: Completed, 100%)
```

---

## UI Indicators

### **Visual States:**

| Status | Icon | Color | Progress Bar | Actions Available |
|--------|------|-------|--------------|-------------------|
| **Pending** | ⚠️ AlertCircle | Gray | 0% | "Start" button |
| **In Progress** | 🕐 Clock | Amber | 10-90% | "Update Progress", "Mark Resolved" |
| **Completed** | ✅ Check | Green | 100% | None (resolved) |

### **Header Badge:**
```
"2 of 3 resolved" with amber pulse indicator
```

---

## Backend Integration (Production Implementation)

### **When Agent Clicks "Start":**
```javascript
POST /api/tickets/{ticketId}/issues/{issueId}/start
Response: { issueId, status: "in-progress", progress: 10, startedBy: "Agent User", startedAt: "2024-12-04T10:05:00Z" }
```

### **When Agent Clicks "Update Progress":**
```javascript
PATCH /api/tickets/{ticketId}/issues/{issueId}/progress
Body: { progress: 60 }
Response: { issueId, progress: 60, updatedBy: "Agent User", updatedAt: "2024-12-04T10:30:00Z" }
```

### **When Agent Clicks "Mark Resolved":**
```javascript
POST /api/tickets/{ticketId}/issues/{issueId}/resolve
Response: { 
  issueId, 
  status: "completed", 
  progress: 100, 
  resolvedBy: "Agent User", 
  resolvedAt: "2024-12-04T10:36:00Z",
  notificationSent: true
}

// Triggers:
// 1. Update issue status in database
// 2. Send notification to customer
// 3. Add timeline entry: "Issue #2 resolved"
// 4. Update ticket status if all issues resolved
// 5. Log action in audit trail
```

---

## Customer Confirmation (Optional)

After agent marks an issue as resolved, system can ask customer to confirm:

### **In Conversation:**
```
Agent: "I've resolved Issue #1 (Authentication). Your team should be able to log in now. 
Can you please confirm this is working?"

Customer: "Yes, confirmed! Login is working now."

System: "✓ Issue #1 confirmed resolved by customer"
```

---

## Auto-Detection (Future Enhancement)

For certain issue types, the system could auto-detect resolution:

- **Authentication Issues**: Monitor successful login attempts
- **Performance Issues**: Track page load times, API response times
- **Data Issues**: Verify data sync completion

```javascript
// Example: Auto-detect authentication fix
if (successfulLoginCount > 5 && failedLoginCount === 0) {
  autoSuggestResolution(issueId: 1);
  // Prompt: "5 successful logins detected. Mark Issue #1 as resolved?"
}
```

---

## Summary

**How issues get resolved:**
1. ✅ **AI identifies** multiple issues automatically
2. ✅ **Agent starts** working on an issue (manual click)
3. ✅ **Agent updates progress** as they work (manual click)
4. ✅ **Agent marks resolved** when fix is complete (manual click)
5. 🔄 **System logs action**, updates UI, sends notifications
6. 🔄 **Customer confirms** in conversation (optional)
7. 🔄 **System auto-detects** resolution (future enhancement)

**The workflow is primarily agent-driven with system automation for tracking, notifications, and timeline updates.**
