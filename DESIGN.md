---
version: alpha
name: Research Consultancy Journal
description: Research Consultancy's design language — the website typeset as a journal article (after Circulation, JAMA, JACC and EJHF) on a white sheet over a warm desk, with RC navy structure, a single orange action colour, a light sans title over sans body text set as AHA journals set theirs, and a full-colour figure palette that makes the graphical abstract, maps, charts and central illustrations the richest thing on every page.

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
    fontFamily: Inter
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-serif:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
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
    fontFamily: Inter
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.55
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
    maxWidth: 1280px
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

The homepage opens on a single navy **cover**: the journal's front page, with a faint grid, the title in white, Key Points, and the graphical abstract. Every other page opens on a white article head. Every word is set in Inter, as AHA journals (Circulation, Circulation: Heart Failure) set theirs in one sans family.

**Key characteristics:**
- Article on a white sheet over a warm desk, `{colors.canvas}` on `{colors.desk}`
- Light, large Inter title (`{typography.display-1}`) over Inter body text (`{typography.body-serif}`)
- Navy structure and one orange action colour; figure labels in `{colors.label-ink}`
- Journal furniture that carries real information: Key Points, structured abstract, key words, margin notes, abbreviations, numbered figures and tables, citations, references
- A full-colour figure palette, used in figures, illustrations, maps and charts, never for buttons
- One navy cover on the homepage; everything else is paper
- Square, printed geometry for figures, tables and panels; pill-shaped buttons for actions

## Colors

> Source: the RC logo (navy #02264d, orange #f67737) and the typeset PDFs of Circulation, Circulation: Heart Failure, EJHF and Current Problems in Cardiology papers co-authored by RC faculty and mentees.

### Article-type colours
AHA colours each journal's article types; RC gives each page's article type one colour, and nothing else changes. The colour (`--journal`, set by the layout's `accent`) appears only in the article type line and the side tab. Heads, labels, boxes, tables and the drop cap are the same navy and orange on every page, and orange stays reserved for buttons and the drop cap.

| Page | Article type | Colour |
|---|---|---|
| Home | Original Article | rust `#a3440d` |
| Courses | State of the Art | teal `#0f6b69` |
| Level 1 · Meta-Analysis · CDC WONDER · NIS · NRD | Design and Rationale | green · purple · teal · rust · magenta |
| Match Mentorship | Special Report | red `#ad2338` |
| Results | Supplemental Material | purple `#5e3b92` |
| Mentors | Editorial Board | blue `#1b5aa0` |
| About | Perspective | gold `#855600` |
| Contact | Correspondence | navy `#02264d` |

The desk stays warm grey (`#efeeeb`) and the site header and footer stay light. A navy desk was tried and rejected.

### The physical page
- **Paper.** Pages are plain white, as a PDF renders them, with a soft layered shadow. An off-white stock with grain was tried and rejected; the page breaks and shadows carry the effect.
- **Pages.** Sections marked `newPage` start a new page: the foot of the page that ends (copyright, page number), a strip of desk that cuts through the sheet's edges, and the head of the next page (page number, italic running head). Page numbers are a CSS counter; the running head is the layout's `runningHead` ("Your Name et al." on the homepage).
- **First page, after EJHF.** Journal mark and name on the left, *Res Consult* (2026) · Volume 10 and the page number (e001…) on the right; an italic dateline under the byline ("Received the day you enroll; revised with your mentor; accepted when your paper is."); the abstract in a warm grey panel with labels in their own column and dotted rules between parts.

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
One family, **Inter Variable** (`@fontsource-variable/inter`), for everything: titles, body, captions, tables and the interface. AHA journals set the whole article in a single sans, and the site follows them. Hierarchy comes from size, weight, capitals and the journal colours, never from a second face.

OpenType `lnum` and `locl` are on. Use `tabular-nums` in tables and numeric columns.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-1}` | 36–60px fluid | 300 | 1.08 | −0.025em | Article title ("Publish earlier. Match stronger. Lead in medicine.") |
| `{typography.display-2}` | 28–40px fluid | 300 | 1.12 | −0.02em | Conclusions statement |
| `{typography.article-type}` | 18px | 800 caps | 1.2 | +0.01em | "ORIGINAL INVESTIGATION", "SPECIAL REPORT" |
| `{typography.section-head}` | 17px | 600 caps | 1.3 | +0.02em | INTRODUCTION, METHODS, RESULTS |
| `{typography.subhead}` | 17px | 600 | 1.4 | 0 | Curriculum, Careers, Case report |
| `{typography.dek}` | 19px Inter | 400 | 1.55 | 0 | Standfirst under the title |
| `{typography.body-serif}` | 17px Inter | 400 | 1.65 | 0 | Article body text |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Interface copy |
| `{typography.body-sm}` | 15px | 400 | 1.33 | 0 | Tables, nav |
| `{typography.button}` | 16px | 500 | 1.5 | 0 | Button labels |
| `{typography.caption}` | 13.5px Inter | 400 | 1.55 | 0 | Figure and table captions |
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
Every page is one **sheet**, at most 1280px wide, centred on the desk with 56px inner margins on desktop. The site header and footer share the sheet's width (`.frame`), so their edges line up with the page. Inside the sheet, each article section uses a two-column **article grid** (a spread):

```
| SECTION HEAD across the full width, under a 3px rule        |
| measure (41rem at xl, 7fr at lg) | figure column (1fr / 5fr) |
| body text                        | the figure, table or panel |
|                                  | that the text refers to    |
| wide figures and tables span both columns                   |
```

- The **head** runs across the page under its rule. There is no empty left rail.
- The **measure** (`j-main`) holds body text, 65 to 75 characters a line.
- The **figure column** (`j-margin`) holds the figure or table the paragraph cites, set beside it as a journal places a figure in the next column. Small notes go here only when a section has no figure.
- **Spans** (`j-span`) hold wide tables, multi-panel photographs and timelines.

Every section should pair its text with a visual. On the homepage, the navy cover spans the full sheet width at the top.

### Whitespace Philosophy
Sections are separated by a grey rule over each section head and a moderate gap (32 to 56px), not by boxes or large empty bands. Inside a section, related elements group tightly: a subhead sits close to its paragraph, and a caption sits close to its figure. The effect is a well-set journal page: dense, with text and figures side by side, never a narrow column beside empty space.

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
- The article grid collapses to one column: section head, then text, then its figure.
- The "On this page" contents line sticks under the site header and scrolls sideways on phones.
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
- **Data figures** from real numbers: bar charts, waffle charts and comparison tables

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

**Actions.** The paper is the costume; the buttons are plain website. Every page names one primary action (`cta` on the layout):
- The **header** carries it as a small orange button beside a quiet WhatsApp link.
- On phones, a **sticky action bar** at the bottom repeats it next to WhatsApp.
- Course pages put it inside a **booking panel** that leads with the fee.
- **Next steps** closes every page as three rows (who you are, where to start, what it takes) with a real button on each row, the page's own row in orange.

Defaults: "Start with Level 1 · $35" site-wide, the course's enroll action on course pages, "Apply with your CV" on Match Mentorship.

**`button-utility`** (mobile menu toggle)
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

**`contents`**: the "On this page" line under the article head. It sticks below the site header, and the section being read is marked with an orange underline.

**`section-head`**: bold navy capitals under a thin (1.5px) grey rule, across the full width of the sheet, as Circulation sets METHODS and DISCUSSION. Subheads are navy, semibold, sentence case, and say something ("Why research matters for the Match").

**`drop-cap`**: the first letter of a page's first paragraph, a solid orange capital across three lines, as Circulation sets its red one.

**`what-is-new`**: after AHA's "What Is New? / What Are the Clinical Implications?" box. A pale blue panel with centred navy capitals and round bullets. The homepage uses it for "What is RC?" and "What it means for you". Sections follow IMRaD where the content allows: Introduction, Methods, Results, Discussion, Limitations, Conclusions.

**`key-points`**: after JAMA. "Key Points" in bold; Question, Findings and Meaning with bold lead-ins and regular answers. Desk-tinted on white pages; translucent white with a hairline ring on the navy cover.

**`panel`**: after Circulation's "What Is New?" box. Panel-blue tint, a centred navy caps title, and square bullets (navy for facts, orange for what it means for you). About uses a Lancet-style "Research in context" panel in the margin, with a navy title bar.

**`abbreviations-box`**: "Nonstandard Abbreviations and Acronyms", a navy-bordered box in the margin with term and expansion pairs (CDC WONDER, ERAS, ICMJE, IMG, NIS, NRD, USMLE).

**`table`**: captioned "Table 1." in label orange followed by a bold title in title case. It has a grey header band and a 1px border on every cell. The footnote sits in small muted text below. Mentee rows carry a round avatar.

**`figure-caption`**: "Figure 1." in label orange and a bold navy title sentence, then the legend in regular text. Multi-panel figures letter each panel A, B, C, both in a white square on the photo and in the legend.

**`central-illustration`**: after JACC. A navy title bar ("**Central Illustration.** The RC ladder…") over a pale blue body divided into steps, each with its own figure-palette tile.

**`graphical-abstract`**: after EJHF. A dark title bar, then five stages (You, Learn, Do, Publish, Match). Each stage has a coloured icon disc, a one-line description and linked course chips. It is horizontal on desktop and stacked on mobile, and lives on the homepage cover.

**`cover`**: the homepage only. A navy sheet-top carrying the logo, the article type in orange, the title in white, the standfirst, actions, Key Points and the graphical abstract, over a faint grid with sky and orange glows.

**`article-end`**: the references the page cites, in two columns, each with a link back to the text, then the running foot (research-consultancy.org on the left; "Volume 10 · September 2026" on the right). No article-information boilerplate: contact lives in Next steps and the footer, and the disclaimer in the footer.

**`next-steps`**: closes every page as a decision table, not three cards: If (where you are now) · Start with · What it takes · the action. The row that fits the page gets the primary button.

**`pull-quote`**: mentee words in italic under a short 3px orange rule, never a coloured left border.

**`footer`**: a site directory on the desk colour below the sheet, ending with the tagline "Publish earlier. Match stronger. Lead in medicine." in italic.

### Figures

Figures are the richest element on every page and must carry real information:
- **Graphical abstract.** The RC pathway, with real numbers.
- **Map.** Match 2026 programs (orange circles), selected Match 2025 programs (sky circles) and postdoctoral research posts (purple diamonds). The three colours pass a colour-vision check; shape carries the posts as well. Rendered at build time from `us-atlas` with `d3-geo`; no client JavaScript.
- **Timeline.** Milestones from 2016 to 2026, one colour per year band.
- **Bar figures** (`BarFigure`). One measure, navy bars, orange for RC's own rows, the value printed at the end of every bar, recessive gridlines and an optional dashed threshold line. Bars grow in once when scrolled into view.
- **Study anatomy** (`StudyAnatomy`). One real student paper traced through its five stages (question, data, analysis, abstract, paper), each stage named with the real detail and the paper linked. It answers "what is research, concretely?" for a first-time visitor.
- **Dumbbell chart** (`Dumbbell`). Two values per row joined by a line, filled orange for the group that did better and hollow grey for the other, with the pair printed at the end. The homepage uses it for median publications of matched and unmatched non-U.S. IMGs in the ten specialties they apply to most (NRMP 2026).
- **Swimmer plot** (`Swimmer`). After oncology papers: one lane per mentee from the first RC course to today, with a shape per milestone (open circle course, diamond first abstracts, filled circle first paper, triangle mentor role, star fellowship, match or major paper). Year-only dates sit at mid-year and the caption says so.
- **Match table** (`MatchTable`). One table for every Match year, grouped by year, with each mentee's own words in their row instead of a separate quote list.
- **Waffle figures** (`Waffle`). 100 squares per panel for shares of RC's students (70% women, 33% rural).
- **Comparison tables with external data.** The homepage and Match Mentorship open with NRMP Charting Outcomes 2026 (non-U.S. IMGs): matched and unmatched applicants reported the same median number of publications, which is why RC argues for mentorship, letters and interviews as well as papers. External numbers are cited; RC's numbers are never presented as a controlled comparison.
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
- Write in plain, specific, active sentences, like a well-edited paper: numbers over adjectives, names over "our students". Speak to the reader as "you" and about RC as "we". Keep the journal furniture (article types, Key Points, IMRaD, figure captions) and let the whimsy live in it: the "Your Name" byline, "Received the day you enroll. Accepted when your paper is." Use American spelling (program, center, analyze, enroll), as JAMA and Circulation do.
- Put the figure a paragraph cites beside that paragraph.
- Give every fact, figure and table one owner page, and link to it from elsewhere instead of repeating it:

| Page | Owns |
|---|---|
| Home | The argument: Key Points, pathway, the NRMP comparison, what a first study needs, the mentoring model, mentee output, match rates, faculty in brief, limitations |
| Courses | The course comparison, how a method course runs, students' words about the classes |
| A course | Its facts, outcomes, method figure, curriculum and what follows it |
| Match Mentorship | What is included, the year, the results table with mentees' words, how to apply |
| Results | Headline numbers, careers map, swimmer plot, papers, meeting photos, awards |
| Mentors | Faculty bios, mentors and analysts, fellows, joining the team |
| About | Why RC exists, who it has trained, the decade, mission |
| Contact | Channels, registering by email, the two questions everyone asks |

- Honour the disclaimer everywhere it matters: RC offers mentorship and does not guarantee publications; authorship follows ICMJE.
- Keep one orchestrated motion on the cover: the graphical abstract lighting up stage by stage, then your name highlighted on the byline. Charts draw once as they scroll into view. Respect `prefers-reduced-motion`; without JavaScript every chart is simply drawn.

### Don't
- Don't mention RCOP anywhere on the RC site. RC serves international students; RCOP has its own site. RCOP statistics may be presented as RC's.
- Don't use RCOP-branded images (posters and posts carrying the RCOP logo).
- Don't justify body text on the web, or rely on `font-variant-caps` with Inter.
- Don't fill buttons or structure the layout with figure-palette colours.
- Don't add a second dark band; the navy cover appears once, on the homepage.
- Don't invent data. If a chart is an example, say so in its caption.
- Don't chop content into identical rounded cards; use sections, tables, figures and panels the way a journal would.
- Don't make the page full-bleed. The sheet on the desk is what makes the site read as a typeset paper.
- Don't leave a column empty beside text; give the section a figure or tighten it.
- Don't repeat a figure, table, quote list or FAQ on a second page. Don't add boilerplate blocks (how to cite, author contributions) to every page.
- Don't use eyebrow labels above headings or coloured left borders on callouts and quotes.
