# LumaResolve — AI Customer Intelligence & CRM Desk

> A modern, high-craft AI-powered Customer Relationship Management (CRM) application with an interactive Tri-Panel Resolution Desk, policy verification audit, zero-reflow text streaming, and built-in **Stageshow** product choreography.

---

## Highlights & Features

### 1. Executive AI Tri-Panel Desk
* **Live Inbound Stream**: Real-time queue filtering across *All Inbound*, *Urgent SLA*, *Billing*, and *AI Ready (≥80%)*.
* **Customer Dossier**: Instant visibility into customer enterprise tier, verified company domain, active Monthly Recurring Revenue (MRR), and lifetime history.
* **Automated Policy & System Audit**: Factual system checks (e.g., Stripe duplicate charge confirmation, SLA dispute status) with transparent percentage confidence.
* **Zero-Slop Response Synthesis**: Pre-synthesized, context-aware resolution copy ready for immediate one-click approval and dispatch.

### 2. Stageshow Product Choreography
* Built using [Benji Taylor's Stageshow skill](https://github.com/benjitaylor/skills):
  * Authored cursor arcs (`Act<S>`) measuring dynamic geometric coordinates without hardcoded pixels.
  * Zero-reflow streaming (`Stream`) pre-allocating text geometry to avoid layout shifts.
  * Live rolling metrics (`Count`) dynamically showing real-time CSAT and resolution velocity impacts.
* Accessible via the in-app **"Watch Stageshow Story"** modal or dedicated **Showcase Mode**.

### 3. Enterprise Triage & Telemetry
* **Open Queue Metrics**: Real-time tracking against 15-minute SLA targets.
* **Resolution Velocity**: Live first-response speed comparisons.
* **ARR Protection Tracking**: Monitored retained revenue for billing and tier disputes.
* **Table & Bulk Actions**: Sortable multi-column ticket index with batch assignment and status updates.

### 4. Full Workspace Modules
* **Knowledge Base**: Automated documentation generator that converts verified customer resolutions into internal KB articles.
* **Analytics**: Detailed performance charts and resolution distributions built with Recharts.
* **Team Collaboration**: Live agent workload management and availability status.
* **Command Palette**: Fast navigation via `Cmd + K` or quick shortcuts (`G D`, `G T`, `G A`, `G S`).
* **Dark / Light Mode**: Unified minimalist palette with high contrast and accessible design tokens.

---

## Tech Stack

* **Framework**: React 18 with TypeScript
* **Build Tool**: Vite 6
* **Styling**: Tailwind CSS with custom minimalist design tokens
* **Icons**: Lucide React
* **Motion & Choreography**: Stageshow Kit (`Stage`, `Window`, `Stream`, `Count`, `Bar`, `Text`)
* **Charts**: Recharts

---

## Getting Started

### Prerequisites
* Node.js 18+ (Node 20+ recommended)
* npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yogidanu/Luma-Resolve.git
   cd Luma-Resolve
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## License

Private / Proprietary. Created for LumaResolve AI CRM.
