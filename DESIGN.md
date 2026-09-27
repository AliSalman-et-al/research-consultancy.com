---
version: alpha
name: Research Consultancy Journal
description: Research Consultancy's design language — the website typeset as a journal article (after Circulation, JAMA, JACC and EJHF) on a white sheet over a warm desk, with RC navy structure, a single orange action colour, a light sans title over serif body text, and a full-colour figure palette that makes the graphical abstract, maps, charts and central illustrations the richest thing on every page.

colors:
  primary: "#f67737"
  primary-active: "#e0621f"
  secondary: "#02264d"
  on-primary: "#02264d"
  canvas: "#ffffff"
  canvas-soft: "#f6f5f4"
  desk: "#efeeeb"
  surface: "#ffffff"
  ink: "rgba(0, 0, 0, 0.95)"
  ink-secondary: "#31302e"
  ink-muted: "#615d59"
  ink-faint: "#a39e98"
  hairline: "#e6e6e6"
  rule-heavy: "#c9c7c3"
  table-head: "#e7e6e3"
  table-border: "#d7d5d1"
  label-ink: "#b3480f"
  panel-tint: "#eef3f9"
  accent-sky: "#4c9be8"
  accent-teal: "#1b8a8f"
  accent-purple: "#7b4fa0"
  accent-gold: "#e3a93b"
  accent-orange: "#f67737"
  accent-rose: "#d9546e"
  accent-green: "#1aae39"

typography:
  display-1:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.025em
  display-2:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: -0.02em
  article-type:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 0.01em
  section-head:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.02em
  subhead:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  dek:
    fontFamily: Source Serif 4
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-serif:
    fontFamily: Source Serif 4
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: 0
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: Source Serif 4
    fontSize: 14.5px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  label:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0.04em
  note:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0

rounded:
  none: 0px
  xs: 3px
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 28px
  xxl: 32px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    padding: 16px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
  button-utility:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 4px 14px
  sheet:
    backgroundColor: "{colors.canvas}"
    pageBackground: "{colors.desk}"
    maxWidth: 1240px
    border: "1px solid #e2e0dc (desktop only)"
  cover:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    typography: "{typography.display-1}"
    padding: 32px
  article-head:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-1}"
    ruleBelow: "5px {colors.rule-heavy}"
  article-type:
    textColor: "{colors.secondary}"
    typography: "{typography.article-type}"
    rule: "1.5px {colors.secondary}, running to the margin"
  section-head:
    textColor: "{colors.secondary}"
    typography: "{typography.section-head}"
    ruleAbove: "3px {colors.rule-heavy}"
  key-points:
    backgroundColor: "{colors.desk}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.none}"
    padding: 24px
  panel:
    backgroundColor: "{colors.panel-tint}"
    titleColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: 24px
  abbreviations-box:
    backgroundColor: "{colors.surface}"
    border: "1.5px solid {colors.secondary}"
    typography: "{typography.note}"
    padding: 14px
  table:
    headerBackground: "{colors.table-head}"
    cellBorder: "1px solid {colors.table-border}"
    typography: "{typography.body-sm}"
    captionLabel: "{colors.label-ink}"
  figure-caption:
    labelColor: "{colors.label-ink}"
    typography: "{typography.caption}"
  central-illustration:
    titleBar: "{colors.secondary}"
    backgroundColor: "#f5f8fb"
    border: "1px solid {colors.secondary}"
  graphical-abstract:
    titleBar: "#0b1f3a"
    backgroundColor: "{colors.surface}"
    stageColors: "{colors.accent-sky}, {colors.accent-teal}, {colors.accent-purple}, {colors.accent-gold}, {colors.accent-orange}"
  footer:
    backgroundColor: "{colors.desk}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-sm}"
    padding: 32px

  # ─── Examples (illustrative) ───
  ex-data-table-cell:
    description: "Journal table cell: grey header band, hairline borders on every cell, body-sm text."
    headerBackground: "{colors.table-head}"
    headerTypography: "{typography.label}"
    bodyTypography: "{typography.body-sm}"
    cellPadding: "9px 12px"
    rowBorder: "{colors.table-border}"
  ex-case-report:
    description: "Case report card: tinted surface, 3px top or left rule in a figure colour, dated timeline."
    backgroundColor: "{colors.canvas-soft}"
    accentRule: "3px {colors.accent-orange}"
    rounded: "{rounded.none}"
    padding: 24px
  ex-margin-note:
    description: "Margin note in the right rail: bold lead-in, then a short fact."
    typography: "{typography.note}"
    textColor: "{colors.ink-muted}"

---


## Overview

Research Consultancy teaches medical students to publish, so the website is set like the thing they are working toward: a journal article. Every page is an article on a white `{colors.canvas}` **sheet** that sits on a warm `{colors.desk}` background, the way a PDF page sits in a viewer. The conventions come from real typeset papers in *Circulation*, *Circulation: Heart Failure*, *JAMA*, *JACC* and the *European Journal of Heart Failure*. They include:
- an underlined journal name
- an article type in bold caps with a rule running to the margin
- a large, light sans title
- a byline with superscript affiliations
- a structured abstract and key words
- a heavy grey rule into the body
- uppercase section heads
- margin notes and numbered figures and tables
- superscript citations that resolve to a reference list
- an Article information block at the end

The structure speaks in **RC navy** (`{colors.secondary}`), taken from the logo, and acts in **RC orange** (`{colors.primary}`), the only colour that fills a button. Labels such as "Figure 1." and "Table 1." use a darker orange, `{colors.label-ink}`, for contrast. Personality lives in the **figures**. A graphical abstract, a map of where mentees matched, a decade timeline, a Central Illustration and method charts (forest plot, trend line, bar chart, readmission curve) use a full-colour figure palette. They are the richest things on every page, as they are in a good paper.

The homepage opens on a single navy **cover**: the journal's front page, with a faint grid, the title in white, Key Points, and the graphical abstract. Every other page opens on a white article head. Body text is set in Source Serif 4 for long reading. Titles, heads, labels, tables and interface use Inter.

**Key characteristics:**
- Article on a white sheet over a warm desk, `{colors.canvas}` on `{colors.desk}`
- Light, large Inter title (`{typography.display-1}`) over serif body text (`{typography.body-serif}`)
- Navy structure and one orange action colour; figure labels in `{colors.label-ink}`
- Journal furniture that carries real information: Key Points, structured abstract, key words, margin notes, abbreviations, numbered figures and tables, citations, references
- A full-colour figure palette, used in figures, illustrations, maps and charts, never for buttons
- One navy cover on the homepage; everything else is paper
- Square, printed geometry for figures, tables and panels; pill-shaped buttons for actions

## Colors

> Source: the RC logo (navy #02264d, orange #f67737) and the typeset PDFs of Circulation, Circulation: Heart Failure, EJHF and Current Problems in Cardiology papers co-authored by RC faculty and mentees.

### Brand & Accent
- **RC Orange** (`{colors.primary}`, #f67737): the single action colour. Primary button fill with navy text (`{colors.on-primary}`) for contrast, the byline highlighter, drop-cap bar, key-word squares and the last stage of the graphical abstract.
- **Pressed Orange** (`{colors.primary-active}`, #e0621f): the pressed state of the primary button.
- **RC Navy** (`{colors.secondary}`, #02264d): the structural colour. Article types, section heads, subheads, the journal name, the Central Illustration title bar, map markers for research posts, and the homepage cover.
- **Label Orange** (`{colors.label-ink}`, #b3480f): "Figure 1." and "Table 1." labels, citation numbers and numbered lists, where orange text must pass contrast on white.

The **figure palette** colours data and illustration. It never fills a button or structures the layout:
- **Sky** (`{colors.accent-sky}`, #4c9be8): stage 1 of the graphical abstract, letters, 2016 on the timeline
- **Teal** (`{colors.accent-teal}`, #1b8a8f): CDC WONDER, reviews, trend lines
- **Plum** (`{colors.accent-purple}`, #7b4fa0): meta-analysis, forest-plot squares
- **Gold** (`{colors.accent-gold}`, #e3a93b): Match 2025 markers, CDC WONDER tags
- **Orange** (`{colors.accent-orange}`, #f67737): Match 2026 markers, the pooled diamond
- **Rose** (`{colors.accent-rose}`, #d9546e): NRD and readmission curves
- **Green** (`{colors.accent-green}`, #1aae39): the WhatsApp glyph and positive ticks only

Each course owns a tint for its illustration band: Level 1 green, Meta-Analysis plum, CDC WONDER teal, NIS orange, NRD rose.

### Surface
- **White** (`{colors.canvas}` / `{colors.surface}`, #ffffff): the article sheet, nav bar and cards.
- **Desk** (`{colors.desk}`, #efeeeb): the page background around the sheet, Key Points boxes and the footer.
- **Warm Paper** (`{colors.canvas-soft}`, #f6f5f4): tinted sections (Conclusions, Questions), case reports and course facts.
- **Panel Blue** (`{colors.panel-tint}`, #eef3f9): "What is different?" panels and the Research in context box.
- **Hairline** (`{colors.hairline}`, #e6e6e6): dividers. **Heavy rule** (`{colors.rule-heavy}`, #c9c7c3): the 5px rule under an article head and the 3px rule over section heads.
- **Table** (`{colors.table-head}` #e7e6e3 header band, `{colors.table-border}` #d7d5d1 cell borders).

### Text
- **Ink** (`{colors.ink}`): titles and interface text. Serif body copy uses #23211f.
- **Warm Charcoal** (`{colors.ink-secondary}`, #31302e): secondary copy, table cells, captions.
- **Stone** (`{colors.ink-muted}`, #615d59): standfirsts, notes and metadata.
- **Ash** (`{colors.ink-faint}`, #a39e98): figure axes and dashed reference lines.

### Semantic
There is no separate status palette. Positive ticks use `{colors.accent-green}`. Disclaimers about publication are set as plain text in the Disclosures block and footnotes, never as warnings.

## Typography

### Font Family
Two families, clearly distinct, as in the journals this site borrows from:
- **Inter Variable** (`@fontsource-variable/inter`) for titles, section heads, labels, tables, figures, notes and the interface. Circulation and JAMA set their titles and furniture in a clean sans.
- **Source Serif 4 Variable** (`@fontsource-variable/source-serif-4`, optical sizes) for long reading: the standfirst, body text, figure captions, Key Points answers, reference entries and quotations.

OpenType `lnum` and `locl` are on. Use `tabular-nums` in tables and numeric columns.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-1}` | 36–60px fluid | 300 | 1.08 | −0.025em | Article title ("Publish earlier. Match stronger. Lead in medicine.") |
| `{typography.display-2}` | 28–40px fluid | 300 | 1.12 | −0.02em | Conclusions statement |
| `{typography.article-type}` | 18px | 800 caps | 1.2 | +0.01em | "ORIGINAL INVESTIGATION", "SPECIAL REPORT" |
| `{typography.section-head}` | 17px | 600 caps | 1.3 | +0.02em | INTRODUCTION, METHODS, RESULTS |
| `{typography.subhead}` | 17px | 600 | 1.4 | 0 | Curriculum, Careers, Case report |
| `{typography.dek}` | 21px serif | 400 | 1.5 | 0 | Standfirst under the title |
| `{typography.body-serif}` | 19px serif | 400 | 1.68 | 0 | Article body text |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Interface copy |
| `{typography.body-sm}` | 15px | 400 | 1.33 | 0 | Tables, nav |
| `{typography.button}` | 16px | 500 | 1.5 | 0 | Button labels |
| `{typography.caption}` | 14.5px serif | 400 | 1.6 | 0 | Figure and table captions |
| `{typography.label}` | 13px | 700 caps | 1.33 | +0.04em | Abstract labels ("IMPORTANCE:"), step labels |
| `{typography.note}` | 13px | 400 | 1.55 | 0 | Margin notes, abbreviations |

### Principles
The voice is **quiet authority, typeset**. A light, large title reads as a published paper rather than an advert. Navy section heads in caps sit under a grey rule. Serif body text at about 65 characters a line reads like a journal page. Caps are used only where journals use them: article type, section heads and abstract labels.

Paragraphs are ragged-right. Print PDFs are justified, but browsers lack print-grade hyphenation, and WCAG advises against justified text on the web. The first paragraph of an article opens with a two-line drop cap set against an orange bar, as Circulation does. Citations are small orange superscripts that link to the numbered reference list.

### Note on Font Substitutes
Inter has no true small caps, so labels use `text-transform: uppercase` at a smaller size with added tracking. Never rely on `font-variant-caps` with Inter.

## Layout

### Spacing System
- **Base unit**: 8px.
- **Tokens (front matter)**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 28px · `{spacing.xxl}` 32px.
- Card interior padding lands around `{spacing.lg}` (24px); utility buttons use a tight 4px/14px; form fields pad at `{spacing.xxs}`-scale 6px. Section gaps stack the larger steps.

### Grid & Container
Every page is one **sheet**, at most 1240px wide, centred on the desk with 56px inner margins on desktop. Inside it, each article section uses a three-column **article grid**:

```
| rail 10.5rem | measure (≈640px) | margin 14.5rem |
| SECTION HEAD | serif body text  | margin notes   |
|              | figure/table spanning measure + margin |
```

- The **rail** holds the section head, sticky on desktop.
- The **measure** holds body text.
- The **margin** holds notes, abbreviations and small stats.

Figures, tables and illustrations span the measure and the margin together. On the homepage, the navy cover spans the full sheet width at the top.

### Whitespace Philosophy
Sections are separated by generous vertical space and a grey rule over each section head, not by boxes. Inside a section, related elements group tightly: a subhead sits close to its paragraph, and a caption sits close to its figure. The effect is a well-set journal page: calm margins, dense where the information is dense.

### Responsive Strategy

#### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Wide | 1440px+ | Full multi-column grids, widest container |
| Desktop | 1080–1300px | Standard centred container, 3-up card grids |
| Tablet | 768–840px | Grids collapse to 2-up, nav begins condensing |
| Mobile | ≤600px | Single-column stacks, hamburger nav, full-width CTAs |

#### Touch Targets
Buttons keep a 44px minimum height. Links in body text are underlined in orange, so they read as links without relying on colour alone.

#### Collapsing Strategy
- Below 1024px, the sheet loses its border and shadow and fills the screen.
- The article grid collapses to one column: section head, then text, then margin notes.
- The navigation condenses to a menu below 1024px.
- Wide tables scroll horizontally inside their own container, never the page.
- The graphical abstract stacks its stages vertically.
- The timeline goes from 7 columns to 4 to 2.

Every grid track uses `minmax(0, 1fr)`, and grid children set `min-width: 0`, so nothing forces horizontal page scroll at 375px.

#### Image Behavior
Photos are served through Astro's `<Image>` with responsive `widths` and `sizes`. Figures and portraits are square-cornered. Portraits crop top-aligned at 4:5. Conference photos are grouped into multi-panel figures with lettered panels (A, B, C) and one caption.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | Hairlines and rules, no shadow | Everything printed on the sheet: tables, figures, panels |
| 1 — Sheet | `0 1px 2px / 0.02`, `0 8px 24px / 0.035`, `0 24px 60px / 0.04` plus 1px `#e2e0dc` border | The article sheet on the desk (desktop only) |
| 2 — Lifted | `0 20px 60px -20px rgba(0,0,0,0.5)` | The graphical abstract lifting off the navy cover; the mobile menu |

The page is paper, so almost nothing floats. Depth comes from one layer: the sheet above the desk. Inside the sheet, surfaces are distinguished by rules, tints and borders, as on a printed page.

### Decorative Depth
Richness comes from **figures**, not effects:
- **Graphical abstract** in five colours
- **U.S. map** of matches and research posts
- **Timeline** of the decade, 2016 to 2026
- **Central Illustration** with a navy title bar
- **Method figures** for each course
- **Multi-panel conference photographs**

The cover adds a faint 48px grid and two soft colour glows (sky and orange) behind the title.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Figures, tables, panels, Key Points, case reports, photos: anything "printed" |
| `{rounded.xs}` | 3px | Figure panel letters, small tags, publication-type chips |
| `{rounded.sm}` | 4px | Logo mark, menu rows |
| `{rounded.md}` | 8px | Utility buttons, the mobile menu |
| `{rounded.lg}` | 12px | Course facts card only |
| `{rounded.full}` | 9999px | Primary and secondary buttons, avatars, graphical-abstract icons, timeline year pills |

### Photography Geometry
Printed elements are square: that is what makes the page read as a journal. Round shapes are reserved for things you tap (buttons) and for people (avatars in tables, bylines and the Match row). Conference photos are cropped to a consistent aspect within a multi-panel figure and labelled A, B, C.

## Components

> **No hover states documented.** Every spec below documents Default and Active/Pressed states only. Variants live as separate `components:` front-matter entries and are described in their own sub-blocks.

### Navigation

**`nav-bar`** — Top navigation
- White surface at 90% with a backdrop blur, sticky. Left: the RC logo mark and "Research Consultancy". Centre: Courses, Match Mentorship, Mentors, Results, About; the current page is set in ink at weight 500. Right: `button-utility` Contact and WhatsApp. Condenses to a menu below 1024px.

### Buttons

**`button-primary`** (Find your first course, Enrol in Level 1, Secure your seat)
- Background `{colors.primary}`, **navy** text `{colors.on-primary}` at weight 600 (white on orange fails contrast), pill `{rounded.full}`, min-height 44px, no wrapping.
- Pressed: `button-primary-pressed` (`{colors.primary-active}`) plus a `scale(0.96)` press.

**`button-primary-pressed`**
- Background `{colors.primary-active}`, text `{colors.on-primary}`.

**`button-secondary`** (Message a mentor, Ask a question)
- White surface, ink text, pill `{rounded.full}`, with a hairline border on white. On the navy cover it sits without a border.

**`button-utility`** (nav Contact and WhatsApp)
- White surface, ink text, `{rounded.md}`, padding `4px 14px`, 1px `{colors.hairline}` border.

### Journal Furniture

**`sheet`**: the white article page on the `{colors.desk}` background, with Level 1 elevation on desktop and full width on mobile. It holds the vertical **section tab**: a navy tab on the sheet's left edge, reading the article type sideways (xl screens only), after Circulation's "STATE OF THE ART" tab.

**`article-head`**: the first page of every inner page, in this order:
1. The journal name "Research Consultancy", underlined, with the dates line on the right in italic ("Established 2016; updated September 2026").
2. `article-type` in bold navy caps with a rule running to the margin.
3. The light `{typography.display-1}` title.
4. Optional byline with superscript affiliations and an affiliation line.
5. Standfirst in `{typography.dek}`.
6. Optional abstract, stat row or actions.
7. An aside on the right: Key Points, a course facts card or a figure.
8. Optional Key Words centred, separated by orange squares.
9. A 5px `{colors.rule-heavy}` rule into the body.

Article types map to page purpose:

| Page | Article type |
|---|---|
| Home | Original Investigation |
| Courses | Review |
| A course | Course |
| Match Mentorship | Special Report |
| Mentors | Author Information |
| Results | Research Letter |
| About | Perspective |
| Contact | Correspondence |

**`section-head`**: navy caps under a 3px grey rule, in the left rail. Sections follow IMRaD where the content allows: Introduction, Methods, Results, Discussion, Limitations, Conclusions.

**`key-points`**: after JAMA. "Key Points" in bold; Question, Findings and Meaning with bold sans lead-ins and serif answers. Desk-tinted on white pages; translucent white with a hairline ring on the navy cover.

**`panel`**: after Circulation's "What Is New?" box. Panel-blue tint, a centred navy caps title, and square bullets (navy for facts, orange for what it means for you). About uses a Lancet-style "Research in context" panel in the margin, with a navy title bar.

**`abbreviations-box`**: "Nonstandard Abbreviations and Acronyms", a navy-bordered box in the margin with term and expansion pairs (CDC WONDER, ERAS, ICMJE, IMG, NIS, NRD, USMLE).

**`table`**: captioned "Table 1." in label orange followed by a bold title in title case. It has a grey header band and a 1px border on every cell. The footnote sits in small muted text below. Mentee rows carry a round avatar.

**`figure-caption`**: "Figure 1." in label orange and a bold title sentence, then a serif legend. Multi-panel figures letter each panel A, B, C, both in a white square on the photo and in the legend.

**`central-illustration`**: after JACC. A navy title bar ("**Central Illustration.** The RC ladder…") over a pale blue body divided into steps, each with its own figure-palette tile.

**`graphical-abstract`**: after EJHF. A dark title bar, then five stages (You, Learn, Do, Publish, Match). Each stage has a coloured icon disc, a serif sentence and a tinted stat chip. It is horizontal on desktop and stacked on mobile, and lives on the homepage cover.

**`cover`**: the homepage only. A navy sheet-top carrying the logo, the article type in orange, the title in white, the standfirst, actions, Key Points and the graphical abstract, over a faint grid with sky and orange glows.

**`article-end`**: Article information, then references and a running foot:
- **Corresponding author:** WhatsApp and email.
- **Author contributions:** "You design the study, analyse the data and write the paper…".
- **Conflict of interest disclosures:** "does not conduct or guarantee publications".
- **References:** numbered, with the source hostname linked.
- **Running foot:** research-consultancy.org on the left; "Publish earlier. Match stronger. Lead in medicine." in italic on the right.

**`footer`**: a site directory on the desk colour below the sheet.

### Figures

Figures are the richest element on every page and must carry real information:
- **Graphical abstract.** The RC pathway, with real numbers.
- **Map.** Match 2026 programmes (orange), selected Match 2025 programmes (gold) and postdoctoral research posts (navy diamonds). Rendered at build time from `us-atlas` with `d3-geo`; no client JavaScript.
- **Timeline.** Milestones from 2016 to 2026, one colour per year band.
- **Method figures, one per course.** Level 1: the anatomy of a paper. Meta-analysis: a forest plot. CDC WONDER: a joinpoint trend line. NIS: grouped bars. NRD: a cumulative readmission curve. Every caption says **Illustrative data**.

### Examples (illustrative)

**`ex-data-table-cell`**: the journal table cell described above.
- Properties: `headerBackground`, `headerTypography`, `bodyTypography`, `cellPadding`, `rowBorder`

**`ex-case-report`**: a mentee's journey as a dated timeline on a tinted card, with a coloured top or left rule.
- Properties: `backgroundColor`, `accentRule`, `rounded`, `padding`

**`ex-margin-note`**: a short fact in the right margin with a bold lead-in ("Why meta-analysis first?").
- Properties: `typography`, `textColor`


## Do's and Don'ts

### Do
- Set every page as an article: an article head with the journal name, article type, light title and heavy rule, then IMRaD-style sections, then Article information and references.
- Make figures the richest thing on the page, and make them true: real names, programmes, dates and numbers. Label illustrative charts "Illustrative data".
- Cite claims with superscript numbers that link to a reference list, and link papers to their DOI.
- Keep `{colors.primary}` for buttons and small accents (drop-cap bar, key-word squares, highlighter). Use navy text on orange.
- Use `{colors.label-ink}` whenever orange appears as text.
- Keep printed things square (figures, tables, panels, photos) and interactive things round (buttons, avatars).
- Write in plain, specific, active sentences, like a well-edited paper: numbers over adjectives, names over "our students".
- Honour the disclaimer everywhere it matters: RC offers mentorship and does not guarantee publications; authorship follows ICMJE.
- Keep one orchestrated motion per page: the graphical abstract lighting up stage by stage, then your name highlighted on the byline. Respect `prefers-reduced-motion`.

### Don't
- Don't mention RCOP anywhere on the RC site. RC serves international students; RCOP has its own site. RCOP statistics may be presented as RC's.
- Don't use RCOP-branded images (posters and posts carrying the RCOP logo).
- Don't justify body text on the web, or rely on `font-variant-caps` with Inter.
- Don't fill buttons or structure the layout with figure-palette colours.
- Don't add a second dark band; the navy cover appears once, on the homepage.
- Don't invent data. If a chart is an example, say so in its caption.
- Don't chop content into identical rounded cards; use sections, tables, figures and panels the way a journal would.
