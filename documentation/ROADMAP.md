# StudyTool Roadmap
### As of: 2026-02-08
A living roadmap guiding StudyTool's evolution from a modular prototype into a polished, cloud-connected study platform.

This roadmap is divided into Near-Term, Mid-Term, and Long-Term milestones. Items may shift as the product grows.

---

## Near-Term (Current Cycle)
These items come directly from the **Planned** section of the [CHANGELOG](CHANGELOG.md).

### 1. Account System & Cloud Sync
- User accounts (email + password or OAuth)
- Sync decks, cards, and study progress across devices
- Secure Supabase policies for per-user data
- Local-first caching with background sync

### 2. Study Sessions & Spaced Repetition
- Core study session UI
- Leitner or SM-2 algorithm implementation
- Session history tracking
- Daily review queue
- Progress indicators and streaks

### 3. Improved Mobile Layout
- Responsive layout overhaul
- Touch-friendly interactions
- Mobile-optimised navigation
- Adaptive typography and spacing

### 4. New Pages
Implement the following pages with full component documentation and modular includes:
- About
- Deck
- Edit Card
- Edit Deck
- Features
- Flashcards
- Stats
- Study

---

## Mid-Term
### 5. A/B Testing
A structured system for testing different versions of StudyTool's UI, UX, and onboarding flows to determine which variants produce the highest retention, engagement, and study completion rates.

- Host alternate visual styles on seperate domains or subdomains
- Test variations in:
 - Layout density (compact vs. spacious)
 - Colour themes and contrast levels
 - Typography systems
 - Navigation structure and placement
 - Card and deck UI styles
- Ensure each domain is fully functional and identical in features, differing only in design.

### 6. Component Architecture Enhancements
- Nested include support with recursion protection
- Component metadata for auto-docs
- Shared JS utilities and event bus
- Global design tokens (colours, spacing, typography)

### 7. Documentation System
- Markdown parser improvements (code blocks, etc.)
- Syntax highlighting
- Auto-generated component docs
- Searchable docs index

### 8. Feedback & Analytics
- Polished feedback UI
- Supabase feedback ingestion
- Internal dashboard for viewing submissions

### 9. Deck & Card Management
- Bulk editing
- Import/export (CSV, JSON)
- Deck sharing (public/private links)

---

## Long-Term
### 10. Advanced Study Features
- AI-assisted card generation
- Smart difficulty adjustment
- Personalised study plans

### 11. Community & Collaboration
- Shared decks library
- Upvoting, tagging, and categories
- Collaborative deck editing
- Classroom mode (teacher -> student decks)

---

## Vision
StudyTool aims to become a **beautiful, ethical, user-empowering study platform with:**
- transparent design
- modular architecture
- user-owned data
- zero dark patterns

This roadmap evolves as StudyTool grows.