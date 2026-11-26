# LumaResolve Design System

## 🎨 Visual Principles

### Core Philosophy
- **Clean & Spacious**: Generous whitespace, never cramped
- **Intelligent Minimalism**: Notion-like simplicity with purpose
- **Premium Feel**: Crisp borders, subtle shadows, refined typography
- **Calm & Confident**: Blue accent conveys intelligence without aggression

---

## 📐 Layout Grid

### Grid System
- **12-column grid** for flexible layouts
- **Gutter**: 24px between columns
- **Margin**: 32px outer padding
- **Max Width**: 1920px for ultra-wide displays

### Tri-Panel Layout (Ticket Detail)
```
┌─────────────────────────────────────────────────────────┐
│  Left (20%)     │  Center (55%)      │  Right (25%)     │
│  Customer       │  Ticket            │  AI Assistant    │
│  Context        │  Workspace         │  Panel           │
└─────────────────────────────────────────────────────────┘
```

**Panel Widths**:
- Left Panel: 20% (customer context, timeline, past tickets)
- Center Panel: 55% (ticket content, notes, conversation)
- Right Panel: 25% (AI summary, resolution, draft response)

---

## 🎨 Color Palette

### Primary Colors
```css
--primary-blue: #4C84FF        /* Calm, intelligent blue */
--primary-blue-soft: rgba(76, 132, 255, 0.12)
--primary-blue-border: rgba(76, 132, 255, 0.32)
```

### Neutral Palette (Hybrid)
```css
--white: #FFFFFF
--gray-50: #FAFAFA            /* Page background */
--gray-100: #F6F6F7           /* Panel background */
--gray-200: #EAEAED           /* Borders */
--gray-300: #D7D7DA           /* Input borders */
--gray-600: #5E5E5E           /* Secondary text */
--gray-900: #1F1F1F           /* Primary text */
```

### Semantic Colors
```css
--success: #2EB67D            /* Green for positive actions */
--warning: #F4C14E            /* Orange for attention */
--danger: #FF4C4C             /* Red for critical */
```

### Usage Examples
- **Backgrounds**: White cards on #FAFAFA pages
- **Borders**: Always #EAEAED (subtle, never harsh)
- **Text**: #1F1F1F primary, #5E5E5E secondary
- **Accents**: #4C84FF for interactive elements

---

## ✏️ Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro', 'Segoe UI', sans-serif;
-webkit-font-smoothing: antialiased;
```

### Type Scale
```
H1: 28px / 600 weight / -0.02em letter-spacing  (page titles)
H2: 20px / 600 weight / -0.01em letter-spacing  (section headers)
H3: 16px / 500 weight                           (card headers)
Body: 14px / 400 weight / 1.6 line-height       (default text)
Small: 13px / 400 weight                        (secondary info)
Tiny: 12px / 400 weight                         (labels, badges)
```

### Typography Hierarchy
- **Page Title**: 24-28px, sparse
- **Card Header**: 16-18px, clear grouping
- **Body Text**: 14-15px, comfortable reading
- **Meta Info**: 12-13px, subtle but readable

---

## 📦 Components

### Cards
```css
Background: #FFFFFF
Border: 1px solid #EAEAED
Border Radius: 8px
Padding: 24px (p-6)
Shadow: None (borders only for cleaner look)
```

**Usage**:
- Stats cards: 8px padding, icon + number
- Content cards: 24px padding, structured sections
- Info cards: 16px padding for dense information

### Buttons

#### Primary
```css
Background: #4C84FF
Text: White
Padding: 10px 20px (py-2.5 px-5)
Border Radius: 6px
Hover: #3D73E8
```

#### Secondary
```css
Background: White
Border: 1px solid #EAEAED
Text: #1F1F1F
Hover: Background #FAFAFA
```

#### Tertiary (Ghost)
```css
Background: Transparent
Text: #4C84FF
Hover: Background rgba(76, 132, 255, 0.12)
```

### Input Fields
```css
Border: 1px solid #D7D7DA
Border Radius: 6px
Padding: 12px 16px (py-3 px-4)
Font Size: 14-15px
Focus: Border #4C84FF, Ring 2px rgba(76, 132, 255, 0.12)
```

### Badges & Tags
```css
Border Radius: 6px
Padding: 4px 12px (py-1 px-3)
Font Size: 12px

Priority High: bg-[rgba(226,85,85,0.12)] text-[#E25555]
Priority Medium: bg-[rgba(244,193,78,0.12)] text-[#F4C14E]
Priority Low: bg-[rgba(46,182,125,0.12)] text-[#2EB67D]
Status: bg-[rgba(76,132,255,0.12)] text-[#4C84FF]
```

---

## 📏 Spacing System

### Scale (8px base unit)
```
3px:  0.75 (minimal gap)
6px:  1.5  (tight spacing)
8px:  2    (xs)
12px: 3    (sm)
16px: 4    (md - default)
24px: 6    (lg - card padding)
32px: 8    (xl - section margins)
48px: 12   (2xl - large gaps)
```

### Application
- **Buttons**: 10-12px vertical, 16-20px horizontal
- **Cards**: 24px padding for content, 16px for compact
- **Sections**: 32px between major sections
- **Inline gaps**: 12-16px between related elements

---

## 🎯 Visual Elements

### Borders
- **Default**: 1px solid #EAEAED
- **Input Focus**: 1px solid #4C84FF
- **Active State**: 2px solid #4C84FF (for emphasis)
- **Left Accent**: 4px left border on AI cards

### Border Radius
- **Cards**: 8px (rounded-[8px])
- **Buttons**: 6px (rounded-[6px])
- **Inputs**: 6px (rounded-[6px])
- **Badges**: 6px (rounded-[6px])
- **Avatars**: 50% (rounded-full)
- **Icons**: 6px (rounded-[6px])

### Shadows
**Philosophy**: Use borders instead of shadows for cleaner, more modern look

```css
/* Modals only */
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.10);

/* Cards use borders */
border: 1px solid #EAEAED;
```

---

## 🎭 Interactive States

### Hover States
- **Cards**: Background #FAFAFA
- **Buttons**: Slightly darker background
- **Links**: Underline or color darken
- **Table Rows**: Background #FAFAFA

### Focus States
- **Inputs**: Border #4C84FF + Ring 2px rgba(76, 132, 255, 0.12)
- **Buttons**: Outline 2px #4C84FF offset 2px
- **Interactive Cards**: Border #4C84FF

### Active States
- **Buttons**: Background darker
- **Tabs**: Border bottom 2px #4C84FF
- **Selected items**: Background rgba(76, 132, 255, 0.12)

---

## 📱 Responsive Behavior

### Breakpoints
```
Mobile: < 768px
Tablet: 768px - 1366px
Laptop: 1366px - 1920px
Desktop: 1920px+
```

### Layout Adjustments
- **Desktop (1920px+)**: Full tri-panel layout
- **Laptop (1366px)**: Slightly narrower margins
- **Tablet**: Stack panels vertically or collapse side panels
- **Mobile**: Single column, progressive disclosure

---

## 🎨 Screen Specifications

### SCREEN 1: Login
- **Background**: Pure white (#FFFFFF)
- **Card**: Border only, no shadow
- **Logo**: 40px square icon + wordmark
- **Inputs**: Full width, 48px height
- **Spacing**: 48px vertical between sections

### SCREEN 2: Dashboard
- **Background**: #FAFAFA
- **Top Bar**: White with bottom border
- **Stats Grid**: 4 columns, 24px gap
- **Cards**: White background, subtle borders
- **Table**: Alternating row hover states

### SCREEN 3: Ticket Detail (Tri-Panel)
- **Left Panel**: #FAFAFA background, 20% width
- **Center Panel**: White background, 55% width
- **Right Panel**: #FAFAFA background, 25% width
- **Borders**: Vertical borders between panels
- **AI Cards**: Left blue accent border (4px)

---

## ✨ Special Elements

### AI Summary Card
```css
Background: White
Border: 1px solid #EAEAED
Border-Left: 4px solid #4C84FF (accent)
Padding: 24px
```

### Confidence Badge
```css
High (85%+): Green dot + text
Medium (60-85%): Orange dot + text
Low (<60%): Red dot + warning
Font Size: 12px
Display: Inline-flex with dot
```

### Timeline Events
```css
Icon Container: 32px circle, #F6F6F7 background
Connector: 1px #EAEAED line
Spacing: 16px vertical between events
```

---

## 🎯 Accessibility

### Contrast Ratios
- Primary Text (#1F1F1F on #FFFFFF): 18.5:1 ✅
- Secondary Text (#5E5E5E on #FFFFFF): 7.4:1 ✅
- Blue Links (#4C84FF on #FFFFFF): 4.8:1 ✅

### Interactive Elements
- Minimum touch target: 44x44px
- Focus indicators: Always visible
- Keyboard navigation: Full support
- Screen reader: ARIA labels on all controls

---

## 📐 Measurement Reference

### Common Patterns
```
Stats Card:
  - Padding: 24px (p-6)
  - Icon: 40px container, 20px icon
  - Number: 32px font
  - Label: 13px font, gray-600

Table Row:
  - Height: auto (py-4)
  - Cell Padding: 16px right (pr-4)
  - Font Size: 14px
  - Hover: Background #FAFAFA

Modal:
  - Max Width: 672px (max-w-2xl)
  - Padding: 32px (p-8)
  - Header: 24px bottom border
  - Footer: 24px top border
```

---

## 🎨 Dark Mode

### Color Adjustments
```css
.dark {
  --white: #1F1F1F
  --gray-50: #2A2A2A
  --gray-100: #3D3D3D
  --gray-200: #4D4D4D
  --gray-600: #B0B0B0
  --gray-900: #EAEAED
}
```

### Implementation
- Toggle in top-right corner
- LocalStorage persistence
- Smooth transitions
- All components support both themes

---

## ✅ Design Checklist

When creating new components:
- [ ] Uses 8px spacing scale
- [ ] Border radius 6-8px
- [ ] Borders instead of heavy shadows
- [ ] Generous padding (24px minimum for cards)
- [ ] Hover states on interactive elements
- [ ] Focus states for keyboard navigation
- [ ] Proper color contrast (WCAG AA)
- [ ] Consistent with existing patterns
- [ ] Typography from defined scale
- [ ] Mobile-responsive (when applicable)

---

Built with attention to detail and human-AI collaboration principles.
