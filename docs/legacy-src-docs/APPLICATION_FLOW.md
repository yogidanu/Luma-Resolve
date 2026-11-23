# LumaResolve — Application Flow

## 🔄 Complete User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  1. LOGIN SCREEN                                                │
│  ┌────────────────────────────────────────┐                    │
│  │  [LumaResolve Logo]                    │                    │
│  │                                        │                    │
│  │  ┌──────────────────────────────────┐ │                    │
│  │  │  Sign In                         │ │                    │
│  │  │  Email: ___________________     │ │                    │
│  │  │  Password: ________________     │ │                    │
│  │  │  □ Remember me                  │ │                    │
│  │  │  [Sign In Button - Blue]        │ │                    │
│  │  └──────────────────────────────────┘ │                    │
│  │  AI-powered CRM resolution system    │                    │
│  └────────────────────────────────────────┘                    │
│                        ↓                                        │
│                   (on login)                                    │
│                        ↓                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  WELCOME TOUR MODAL (First Login)                              │
│  ┌────────────────────────────────────────┐                    │
│  │  Welcome to LumaResolve            [X] │                    │
│  │  ────────────────────────────────────  │                    │
│  │              🤖                        │                    │
│  │  AI-Powered Resolution                 │                    │
│  │  Get instant AI analysis and          │                    │
│  │  suggested resolutions...              │                    │
│  │                                        │                    │
│  │  ● ─── ○ ○ (Step indicators)          │                    │
│  │  ────────────────────────────────────  │                    │
│  │  Skip tour    [Previous] [Next →]     │                    │
│  └────────────────────────────────────────┘                    │
│                        ↓                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  2. MAIN DASHBOARD                                              │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ [Logo] LumaResolve  [Search Bar]        [Avatar] Agent    ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌──────────────┬────────────────────────────────────────────┐ │
│  │ LEFT (35%)   │ RIGHT (65%)                                │ │
│  │              │                                            │ │
│  │ ┌──────────┐ │ All Tickets [Filters] [Sort] [Search]    │ │
│  │ │ Open     │ │ ┌──────────────────────────────────────┐ │ │
│  │ │ Tickets  │ │ │ ID │ Customer │ Issue │ Pri │ Status │ │ │
│  │ │   42     │ │ ├──────────────────────────────────────┤ │ │
│  │ └──────────┘ │ │ TKT-1001 │ Sarah │ Payment... │ High │ │ │
│  │              │ │ TKT-1002 │ Marcus│ Export...  │ Med  │ │ │
│  │ ┌──────────┐ │ │ TKT-1003 │ Emily │ Login...   │ Low  │ │ │
│  │ │ AI       │ │ │ ... (Click any row to open details) │ │ │
│  │ │ Insights │ │ └──────────────────────────────────────┘ │ │
│  │ │ • 16 rep.│ │                                            │ │
│  │ │ • 8 sim. │ │                                            │ │
│  │ └──────────┘ │                                            │ │
│  │              │                                            │ │
│  │ ┌──────────┐ │                                            │ │
│  │ │ My Prod. │ │                                            │ │
│  │ │ 12 today │ │                                            │ │
│  │ │ 68% AI ✨│ │                                            │ │
│  │ └──────────┘ │                                            │ │
│  └──────────────┴────────────────────────────────────────────┘ │
│                        ↓                                        │
│                  (Click ticket)                                 │
│                        ↓                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  3. TICKET DETAIL SCREEN (TRI-PANEL) ⭐                         │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ [←] LumaResolve                        Ticket TKT-1001     ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌──────┬──────────────────┬─────────┐                         │
│  │ LEFT │ CENTER           │ RIGHT   │                         │
│  │ 22%  │ 53%              │ 25%     │                         │
│  │      │                  │         │                         │
│  │┌────┐│┌───────────────┐│┌───────┐│                         │
│  ││Cust│││ Issue Title   │││ AI    ││                         │
│  ││ SC │││ [High] [Open] │││Summary││                         │
│  ││────│││───────────────│││───────││                         │
│  ││Name│││ Customer Msg: │││Root   ││                         │
│  ││Tier│││ "I've paid    │││cause: ││                         │
│  ││Tags│││  $299 but..."  │││Payment││                         │
│  │└────┘││───────────────│││sync   ││                         │
│  │      ││ Conversation  │││delay  ││                         │
│  │┌────┐││ Thread:       │││───────││                         │
│  ││Time│││ [Bubbles...]  │││[See   ││                         │
│  ││line│││───────────────│││reason]││                         │
│  ││ •  │││ Agent Notes:  │││       ││                         │
│  ││ •  │││ [Textarea...] │││┌─────┐││                         │
│  ││ •  ││└───────────────┘│││Sugge││                         │
│  │└────┘│                  ││stions││                         │
│  │      │                  │││ 1.  ││                         │
│  │┌────┐│                  │││ 2.  ││                         │
│  ││Past││                  │││ 3.  ││                         │
│  ││Tkts││                  ││└─────┘│                         │
│  │└────┘│                  │││       │                         │
│  │      │                  │││┌─────┐│                         │
│  │┌────┐│                  ││││Draft││                         │
│  ││Tags││                  ││││Resp.││                         │
│  │└────┘│                  ││││✨   ││                         │
│  │      │                  │││[Text]││                         │
│  │      │                  │││[Tone]││                         │
│  │      │                  │││──────││                         │
│  │      │                  │││[Send]││                         │
│  │      │                  │││[Edit]││                         │
│  │      │                  │││[Esc.]││                         │
│  │      │                  ││└─────┘│                         │
│  └──────┴──────────────────┴─────────┘                         │
│            ↓              ↓           ↓                         │
│      (View info)   (Edit notes) (Click actions)                │
│                                        ↓                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  APPROVE RESPONSE MODAL (When clicking "Approve & Send")       │
│  ┌────────────────────────────────────────┐                    │
│  │  Approve Response              [X]     │                    │
│  │  ────────────────────────────────────  │                    │
│  │  Review before sending to Sarah Chen  │                    │
│  │                                        │                    │
│  │  ┌──────────────────────────────────┐ │                    │
│  │  │  Hi Sarah,                       │ │                    │
│  │  │  Thank you for upgrading...      │ │                    │
│  │  │  [Full response preview]         │ │                    │
│  │  └──────────────────────────────────┘ │                    │
│  │  ────────────────────────────────────  │                    │
│  │  [Cancel] [Edit] [Send Response →]    │                    │
│  └────────────────────────────────────────┘                    │
│                        ↓                                        │
│                  (Click Send)                                   │
│                        ↓                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  AUTO DOCUMENTATION PANEL (After sending)                      │
│  ┌────────────────────────────────────────┐                    │
│  │  ✨ Auto Documentation         [X]     │                    │
│  │  Ticket TKT-1001                       │                    │
│  │  ────────────────────────────────────  │                    │
│  │  AI generated documentation:           │                    │
│  │                                        │                    │
│  │  Summary: [Payment processed but...]   │                    │
│  │  Root Cause: [Sync delay]              │                    │
│  │  Resolution: [1. Verified 2. Fixed...] │                    │
│  │  Category: [API / Authentication]      │                    │
│  │  Tags: [API] [Auth] [Resolved]         │                    │
│  │  ────────────────────────────────────  │                    │
│  │  [Reject] [Edit] [Approve ✓]           │                    │
│  └────────────────────────────────────────┘                    │
│                        ↓                                        │
│                  (Back to Dashboard)                            │
│                        ↓                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  AI REASONING MODAL (When clicking "See reasoning")            │
│  ┌────────────────────────────────────────┐                    │
│  │  ✨ Why Luma suggested this    [X]     │                    │
│  │  ────────────────────────────────────  │                    │
│  │  AI analyzed ticket context...         │                    │
│  │                                        │                    │
│  │  ✓ Data Points Used                    │                    │
│  │    • Payment confirmed in Stripe       │                    │
│  │    • Account tier mismatch             │                    │
│  │                                        │                    │
│  │  📈 Pattern Matches                    │                    │
│  │    87% Similar cases resolved          │                    │
│  │    92% Sentiment match                 │                    │
│  │                                        │                    │
│  │  ✨ Confidence Indicators               │                    │
│  │    Root cause: ████████░░ 92%          │                    │
│  │    Solution:   ███████░░░ 87%          │                    │
│  │                                        │                    │
│  │  ✓ Safety Checks                       │                    │
│  │    ✓ No PII in response                │                    │
│  │    ✓ Tone matches guidelines           │                    │
│  │  ────────────────────────────────────  │                    │
│  │  [Got it]                              │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  EDIT RESPONSE SCREEN (When clicking "Edit Draft")             │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ [←] Edit Response         [Cancel] [Save & Return]        ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌────────────────────────────────┬───────────────────────────┐│
│  │ EDITOR                         │ SIDEBAR                   ││
│  │ [B] [I] [@customer] [@ticket]  │ Tone of Voice             ││
│  │ ┌────────────────────────────┐ │ ◄────────●──────► slider  ││
│  │ │ Hi Sarah,                  │ │ Formal ↔ Friendly         ││
│  │ │ Thank you for upgrading... │ │                           ││
│  │ │ [Editable text area]       │ │ [✨ Rewrite with AI]      ││
│  │ │                            │ │                           ││
│  │ │                            │ │ Insert Variables:         ││
│  │ └────────────────────────────┘ │ • Customer Name           ││
│  │                                │ • Ticket ID               ││
│  │ Preview:                       │ • Company Name            ││
│  │ ┌────────────────────────────┐ │                           ││
│  │ │ [Rendered preview]         │ │ Quick Actions:            ││
│  │ │                            │ │ • Make empathetic         ││
│  │ └────────────────────────────┘ │ • Make concise            ││
│  └────────────────────────────────┴───────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  AGENT PERFORMANCE & ANALYTICS SCREEN                           │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ [←] Agent Performance & Analytics                          ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌─────────┬─────────┬─────────┬─────────┐                     │
│  │ ⏱ Avg   │ ✓ First │ ✨ AI   │ ⭐ CSAT │                     │
│  │ Handle  │ Contact │ Assist  │         │                     │
│  │ 4.2m    │ 89%     │ 68%     │ 4.8     │                     │
│  │ ↓ 12%   │ ↑ 8%    │ ↑ 15%   │ ↑ 3%    │                     │
│  └─────────┴─────────┴─────────┴─────────┘                     │
│                                                                 │
│  AI Insights:                                                   │
│  ┌────────────────────────┬────────────────────────┐           │
│  │ 📈 You resolve payment │ ✨ AI automated 63     │           │
│  │ issues 45% faster      │ responses this week    │           │
│  │ Your: 2.3m / Team: 4.2m│ Time saved: 3.2 hours  │           │
│  └────────────────────────┴────────────────────────┘           │
│                                                                 │
│  Ticket Trends:                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │ Bar Chart: Mon-Sun ticket resolution volumes   │            │
│  │ Category Breakdown: Payment (42), API (28)...  │            │
│  │ Sentiment: 76% Positive, 18% Neutral, 6% Neg   │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  SETTINGS SCREEN                                                │
│  ┌────────────────────────────────────────────────────────────┐│
│  │ [←] Settings                                               ││
│  └────────────────────────────────────────────────────────────┘│
│  ┌────────────────────────────────────────────────┐            │
│  │ 👤 User Profile                                │            │
│  │ Name: [Agent User]      Email: [agent@...]    │            │
│  │ Role: Support Agent (disabled)                 │            │
│  └────────────────────────────────────────────────┘            │
│  ┌────────────────────────────────────────────────┐            │
│  │ 💬 Tone of Voice Preferences                   │            │
│  │ ○ Neutral          - Balanced communication    │            │
│  │ ● Professional     - Formal and business       │            │
│  │ ○ Friendly         - Warm and approachable     │            │
│  │ ○ Crisp Intelligent- Clear and authoritative   │            │
│  │ ○ Empathetic       - Understanding & caring    │            │
│  └────────────────────────────────────────────────┘            │
│  ┌────────────────────────────────────────────────┐            │
│  │ 🔔 Notification Settings                       │            │
│  │ Email Notifications        [ON] ●─────         │            │
│  │ Desktop Notifications      [ON] ●─────         │            │
│  │ AI Suggestions             [ON] ●─────         │            │
│  └────────────────────────────────────────────────┘            │
│  ┌────────────────────────────────────────────────┐            │
│  │ 💾 Knowledge Base Integration                  │            │
│  │ Status: ✓ Connected (synced 2 min ago)        │            │
│  │ Articles: 1,247  Updated: Nov 28, 2024         │            │
│  │ [Manage Knowledge Base]                        │            │
│  └────────────────────────────────────────────────┘            │
│                 [Cancel] [Save Changes]                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  EMPTY & ERROR STATES                                           │
│                                                                 │
│  1. No Tickets:                                                 │
│  ┌────────────────────────────────────────┐                    │
│  │         ✓ (large green checkmark)      │                    │
│  │      You're all caught up!             │                    │
│  │  No open tickets at the moment...      │                    │
│  │      [Explore Dashboard]               │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
│  2. Low AI Confidence:                                          │
│  ┌────────────────────────────────────────┐                    │
│  │  ⚠️ Low AI Confidence                  │                    │
│  │  AI is not confident enough...         │                    │
│  │  Confidence: 42% (Below 60%)           │                    │
│  │  [Ask AI Details] [Escalate]           │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
│  3. Conflicting Data:                                           │
│  ┌────────────────────────────────────────┐                    │
│  │  ⚠️ Inconsistent Information           │                    │
│  │  • Payment vs. reported issue          │                    │
│  │  • Timestamp mismatch                  │                    │
│  │  [Review Customer History]             │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
│  4. Ambiguous Intent:                                           │
│  ┌────────────────────────────────────────┐                    │
│  │  ? Multiple Issues Detected            │                    │
│  │  Which should I prioritize?            │                    │
│  │  [Payment Issue]                       │                    │
│  │  [Login Problem]                       │                    │
│  │  [Refund Request]                      │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
│  5. Broken Knowledge Base:                                      │
│  ┌────────────────────────────────────────┐                    │
│  │  💾 Knowledge Base Unavailable         │                    │
│  │  Unable to connect...                  │                    │
│  │  Error: Connection timeout             │                    │
│  │  [Retry] [Continue Anyway]             │                    │
│  └────────────────────────────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Navigation Flow

### Primary Paths
1. **Login → Dashboard** (with welcome tour)
2. **Dashboard → Ticket Detail** (click any ticket)
3. **Ticket Detail → Modals** (AI reasoning, approve, edit)
4. **Ticket Detail → Auto Doc** (after sending response)
5. **Dashboard → Analytics** (from top menu)
6. **Dashboard → Settings** (from top menu)

### Secondary Paths
- Any screen → Back to Dashboard (← button)
- Ticket Detail → Edit Response → Back to Ticket
- Modal → Close → Return to previous screen

---

## ⚡ Key Interactions

### On Dashboard
- **Search**: Filter tickets in real-time
- **Click ticket row**: Open tri-panel detail view
- **Filter dropdowns**: Status, priority, sort options
- **Hover row**: Highlight + show "View" button

### On Ticket Detail
- **Left Panel**: Scroll customer context independently
- **Center Panel**: Edit agent notes, view conversation
- **Right Panel**: 
  - Click "See reasoning" → AI Reasoning Modal
  - Adjust tone → Regenerate draft
  - Click "Approve & Send" → Approve Modal
  - Click "Edit Draft" → Edit Response Screen
  - Click "Escalate" → Escalation flow

### In Modals
- **Approve Modal**: Send, Edit, or Cancel
- **AI Reasoning**: See transparent AI logic
- **Auto Documentation**: Review, edit, or approve
- **All modals**: ESC to close, X button, overlay click

---

## 🎨 Visual Transitions

- **Screen changes**: Instant (no animation for clarity)
- **Modal open/close**: Fade + backdrop blur
- **Hover states**: Subtle background color change
- **Focus states**: Blue ring appears
- **Loading states**: Spinner beside text
- **Success actions**: Brief confirmation then proceed

---

Built for seamless enterprise workflows.
