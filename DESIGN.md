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
    fontSize: 21px to 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.01em
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
    border: "1px solid #dcdad6"
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
    ruleAbove: "1.5px #bdb9b3"
    sectionName: "11px caps, {colors.ink-muted}, set into the rule's right end"
  plain-language-summary:
    backgroundColor: "#f2f0eb"
    questionColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    dividers: "1px dotted #b9b3a9"
  registration:
    openColor: "{colors.label-ink}"
    openIcon: "{colors.primary}"
    closedColor: "{colors.ink-muted}"
    disabledButton: "1.5px dashed #bdb9b3, muted text, pill"
  panel:
    backgroundColor: "{colors.panel-tint}"
    titleColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: 24px
  table:
    headerBackground: "{colors.table-head}"
    cellBorder: "1px solid {colors.table-border}"
    typography: "{typography.body-sm}"
    captionLabel: "{colors.label-ink}"
  figure-caption:
    labelColor: "{colors.label-ink}"
    typography: "{typography.caption}"
  central-illustration:
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
- a Plain Language Summary, as many journals now print one
- a heavy grey rule into the body
- section heads under a rule: the paper's section name in bold capitals, then a plain heading
- margin notes and numbered figures and tables
- superscript citations that resolve to a reference list
- an Article information block at the end

The structure speaks in **RC navy** (`{colors.secondary}`), taken from the logo, and acts in **RC orange** (`{colors.primary}`), the only colour that fills a button. Labels such as "Figure 1." and "Table 1." use a darker orange, `{colors.label-ink}`, for contrast. Personality lives in the **figures**. A graphical abstract, a map of where mentees matched, a decade timeline, a Central Illustration and method charts (forest plot, trend line, bar chart, readmission curve) use a full-colour figure palette. They are the richest things on every page, as they are in a good paper.

**Paper look, website structure.** Most visitors have never read a paper, so the paper is the costume and never the obstacle. Everything visual stays (the sheet, page breaks, running heads, the folio, the article-type tab, AHA captions). What a reader has to work through follows what a first-time student wants to know: headings are plain questions, each page opens with a Plain Language Summary, and prose is capped (about 900 words of reading on the homepage, about 700 elsewhere; Student Results is exempt but opens each section with a one-sentence takeaway). See `docs/adr/0001-paper-look-website-structure.md`.

Every page, the homepage included, opens on a white article head. Every word is set in Inter, as AHA journals (Circulation, Circulation: Heart Failure) set theirs in one sans family.

**Key characteristics:**
- Article on a white sheet over a warm desk, `{colors.canvas}` on `{colors.desk}`
- Light, large Inter title (`{typography.display-1}`) over Inter body text (`{typography.body-serif}`)
- Navy structure and one orange action colour; figure labels in `{colors.label-ink}`
- Journal furniture that carries real information: Plain Language Summary, margin notes, numbered figures and tables, citations, references. No Key Words line, dateline or abbreviations box: they made a newcomer decode instead of read
- A full-colour figure palette, used in figures, illustrations, maps and charts, never for buttons
- Every page is paper; there is no dark cover
- No prices anywhere. The payment page shows the price
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
| Student Results | Supplemental Material | purple `#5e3b92` |
| Mentors | Editorial Board | blue `#1b5aa0` |
| About | Perspective | gold `#855600` |
| Contact | Correspondence | navy `#02264d` |

The desk stays warm grey (`#efeeeb`) and the site header and footer stay light. A navy desk was tried and rejected.

### The physical page
- **Paper.** Pages are plain white, as a PDF renders them, with a hairline border and a soft layered shadow at every screen size. On phones the sheet sits 10px in from each side, and 24px on tablets, so the screen shows desk around the page the way a PDF viewer does. An off-white stock with grain was tried and rejected; the page breaks and shadows carry the effect.
- **Page counter.** While the reader scrolls, a small dark pill ("2 / 4") shows the current page under the header and fades a second after scrolling stops, as a PDF viewer's does. It counts the page breaks.
- **Article-type colour on phones.** The side tab needs a margin, so from 1024px it sits on the sheet's left edge; below that a 4px band in the same colour runs along the first page's top edge.
- **Pages.** Sections marked `newPage` start a new page: the foot of the page that ends (copyright, page number), a strip of desk that cuts through the sheet's edges, and the head of the next page (page number, italic running head). Page numbers are a CSS counter; the running head is the layout's `runningHead` ("Your Name et al." on the homepage).
- **The journal.** The site is published as the *Annals of Research Consultancy* (*Ann Res Consult*), a journal in the shape of *Annals of Internal Medicine*. Its name runs through everything inside the paper: the masthead, the folio, the page footers and the citation at each page's end (*Ann Res Consult. 2026;10:e001*). The site header, footer, copyright and disclaimer stay "Research Consultancy", the real organization.
- **First page, after EJHF.** Journal mark and *Annals of Research Consultancy* on the left, *Ann Res Consult* (2026) · Volume 10 and the page number (e001…) on the right; the Plain Language Summary in a warm grey panel with dotted rules between its parts.

### Brand & Accent
- **RC Orange** (`{colors.primary}`, #f67737): the single action colour. Primary button fill with navy text (`{colors.on-primary}`) for contrast, the byline highlighter, the drop cap, the open padlock of an open registration and the last stage of the Central Illustration.
- **Pressed Orange** (`{colors.primary-active}`, #e0621f): the pressed state of the primary button.
- **RC Navy** (`{colors.secondary}`, #02264d): the structural colour. Article types, section heads, subheads, the journal name, the Central Illustration title bar, map markers for research posts, and the Central Illustration's title bar.
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
- **Desk** (`{colors.desk}`, #efeeeb): the page background around the sheet and the footer.
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
The voice is **quiet authority, typeset**. A light, large title reads as a published paper rather than an advert. Every title takes a paper's shape in plain words, "Name: what it is" ("Level 1: A Two-Day Introduction to Clinical Research for Complete Beginners"), at most about 12 words; the part before the colon is set a weight heavier so a newcomer finds the subject first. Navy section heads sit under a grey rule. Serif body text at about 65 characters a line reads like a journal page. Caps are used only where journals use them: article type, section heads and abstract labels.

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

Every section should pair its text with a visual.

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
- On every screen the sheet keeps its border and shadow: 10px in from each side on phones, 24px on tablets.
- On tablets the header shows the logo mark and "Research Consultancy"; on phones, the mark alone.
- The first screen on a phone reads: folio, article type, title, byline, Plain Language Summary, then the page's action. The site header shrinks to the logo mark and the menu.
- The phone action bar stays hidden while the page's own action panel is on screen or below it, so the same button never shows twice.
- The article grid collapses to one column: section head, then text, then its figure.
- The "On this page" contents line sticks under the site header and scrolls sideways on phones.
- The navigation condenses to a menu below 1024px.
- A table never makes a phone scroll sideways. Wide tables become stacked entries on phones (the course comparison, the Match table), and a secondary column folds under the row's name (the Match Mentorship components' targets, the fellows' medical schools). Every page is checked at 320px and 375px.
- The graphical abstract stacks its stages vertically.
- The timeline goes from 7 columns to 4 to 2.

Every grid track uses `minmax(0, 1fr)`, and grid children set `min-width: 0`, so nothing forces horizontal page scroll at 375px.

#### Image Behavior
Photos are served through Astro's `<Image>` with responsive `widths` and `sizes`. Figures and portraits are square-cornered. Portraits crop top-aligned at 4:5. Conference photos are grouped into multi-panel figures with lettered panels (A, B, C) and one caption.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | Hairlines and rules, no shadow | Everything printed on the sheet: tables, figures, panels |
| 1 — Sheet | Layered neutral shadow plus 1px `#dcdad6` border | The article sheet on the desk, at every screen size |
| 2 — Lifted | `0 20px 60px -20px rgba(0,0,0,0.5)` | The mobile menu |

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

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Figures, tables, panels, the summary panel, photos: anything "printed" |
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
- White surface at 90% with a backdrop blur, sticky. Left: the RC logo mark, with "Research Consultancy" from 1024px (below that the journal masthead carries the name). Centre: Courses, Match Mentorship, Student Results, Mentors, About, Contact; the current page is set in navy at weight 600, with no underline. Right: WhatsApp and the page's action. Condenses to a menu below 1024px.

### Buttons

**`button-primary`** (Find your first course, Enrol in Level 1, Secure your seat)
- Background `{colors.primary}`, **navy** text `{colors.on-primary}` at weight 600 (white on orange fails contrast), pill `{rounded.full}`, min-height 44px, no wrapping.
- Pressed: `button-primary-pressed` (`{colors.primary-active}`) plus a `scale(0.96)` press.

**`button-primary-pressed`**
- Background `{colors.primary-active}`, text `{colors.on-primary}`.

**`button-secondary`** (Message a mentor, Ask a question)
- White surface, ink text, pill `{rounded.full}`, with a hairline border on white.

**Actions.** The paper is the costume; the buttons are plain website. Every page names one primary action (`cta` on the layout):
- The **header** carries it as a small orange button beside a quiet WhatsApp link.
- On phones, a **sticky action bar** at the bottom repeats it next to WhatsApp, once the page's own action panel has scrolled away.
- Course pages and Match Mentorship pass `register` instead, so the header and phone bar show that course's registration (or "Closed · Notify me").
- **Next steps** closes every page as one ruled line: a short sentence, the page's one action and "Ask on WhatsApp". On a course page the line is the course's registration.

Defaults: "Start with Level 1" to the Level 1 page site-wide, so the header never leads to a closed class. Never print a price.

**`registration`** (`Registration.astro`, logic in `src/lib/registration.ts`). A course has announced **classes**, each with its own dates, closing date and payment link; Match Mentorship has application windows. The state is worked out from today's date at build time and again in the reader's browser, so a class closes on time without a redeploy. Four states, each with the same button so a closed class reads as an inactive button, not a missing one:
- **Open:** an orange open padlock (the journals' Open Access mark) with "Registration open · Closes Oct 12", the class dates, and a solid orange "Register for Level 1 →". The padlock swings open once as it appears.
- **Opening soon:** a navy padlock with "Opens Nov 1", the button inactive, and "Tell me when it opens".
- **Full** and **closed:** a grey shut padlock with "Class full" or "Registration closed · No class announced yet", the button inactive (dashed grey border, muted text, `aria-disabled`), and "Tell me when it opens", which opens WhatsApp with a message naming the course.

Sizes: `panel` (course pages), `row` (the homepage strip and closing line), `status` (the badge alone, in the Courses table and panel), `badge` (a padlock only, in the Central Illustration's course chips), `button` (the header and phone bar). On the dev server, `?preview` (or `?preview=open`, `soon`, `full`, `closed`) swaps in placeholder classes; they never reach the published site.

**Curriculum topics.** A course page lists every topic by day, visible; each topic opens on its own to show what it covers, so a beginner sees the whole syllabus at a glance.

**`expand`** (`Expand.astro`): a journal website's "Expand" control for reference material a reader scans: full paper lists, tables past their fifth row (rows marked `more` inside a `.j-rows` figure). A pill with a chevron and a label that says exactly what opens ("Show all 12 papers").

**`button-utility`** (mobile menu toggle)
- White surface, ink text, `{rounded.md}`, padding `4px 14px`, 1px `{colors.hairline}` border.

### Journal Furniture

**`sheet`**: the white article page on the `{colors.desk}` background, with Level 1 elevation at every size. It holds the vertical **section tab**: a tab in the article-type colour on the sheet's left edge, reading the article type sideways (from 1024px), after Circulation's "STATE OF THE ART" tab.

**`article-head`**: the first page of every page, in this order:
1. The journal name *Annals of Research Consultancy*, underlined, with *Ann Res Consult* (2026) · Volume 10 and the page number on the right.
2. `article-type` in bold caps, in the page's article-type colour, with a rule running to the margin.
3. The light `{typography.display-1}` title, "Name: what it is", the name a weight heavier.
4. Optional byline. The homepage's reads "Your Name; M. Shahzeb Khan…" with a note under it: "Yes, you. RC students are named as authors on the papers they write."
5. The **Plain Language Summary**: a warm grey panel. The homepage, course pages, Courses, Match Mentorship and Contact ask the reader's questions ("What is RC? How does it work? Does it work?") and answer each in a sentence; Student Results, Mentors and About use three short points. The homepage sets its three questions side by side. An optional row at its foot sends one kind of reader to their own page ("Applying for residency this cycle? Match Mentorship is built for you").
6. An optional action under the summary (the homepage's Level 1 registration strip), or an aside on the right: the course registration panel, the Courses registration list, a figure.
7. The Central Illustration, on the homepage.
8. A rule into the body, then the "On this page" line.

**`contents`**: the "On this page" line under the article head. It sticks below the site header, and the section being read is marked with an orange underline.

**`section-head`**: under a thin (1.5px) grey rule across the sheet, the paper's section name in bold navy capitals at 17px, exactly as Circulation sets METHODS, then the plain heading in semibold ink Title Case at 22 to 26px ("How RC Works"). Every section has a section name, and each page uses the names a journal would: INTRODUCTION, METHODS, RESULTS, DISCUSSION on the homepage; CURRICULUM, OUTCOMES, FOLLOW-UP on course pages; SENIOR EDITORS, STATISTICAL EDITORS, ASSOCIATE EDITORS, ALUMNI, CALL FOR PAPERS on Mentors; SUBMISSION GUIDELINES and FREQUENTLY ASKED QUESTIONS on Match Mentorship; CORRIGENDUM on the 404 page. Back-matter heads (ARTICLE INFORMATION, REFERENCES) are the capitals alone. The "On this page" line lists the plain headings only. Subheads are navy, semibold, Title Case.

**`drop-cap`**: the first letter of a page's first paragraph, a solid orange capital across three lines, as Circulation sets its red one.

**`table`**: captioned "Table 1." in label orange followed by a bold title in sentence case. It has a pale blue header band and a 1px border on every cell. The footnote sits in small muted text below. Student rows carry a round avatar.

**`figure-caption`**: "Figure 1." in label orange and a bold navy title sentence, then the legend in regular text. Multi-panel figures letter each panel A, B, C, both in a white square on the photo and in the legend.

**`central-illustration`**: after JACC. A navy title bar ("**Central Illustration.** The RC ladder…") over a pale blue body divided into steps, each with its own figure-palette tile.

**`article-end`**: the references the page cites, in two columns, each with a link back to the text, then the running foot (research-consultancy.org on the left; "Volume 10 · September 2026" on the right). No article-information boilerplate: contact lives in Next steps and the footer, and the disclaimer in the footer.

**`next-steps`**: closes every page as one line between two navy rules: a sentence, the page's one action, and "Ask on WhatsApp".

**`pull-quote`**: students' words, verbatim, in italic under a short 3px orange rule, never a coloured left border. At most three per page, the shortest and most specific; the full set lives on Student Results.

**`footer`**: a site directory on the desk colour below the sheet, ending with the tagline "Publish earlier. Match stronger. Lead in medicine." in italic.

### Figures

Figures are the richest element on every page and must carry real information:
- **Central Illustration** (`Pathway`). The RC pathway in five stages, with each course chip carrying its registration padlock.
- **Map.** Match 2026 programs (orange circles), selected Match 2025 programs (sky circles) and postdoctoral research posts (purple diamonds). The three colours pass a colour-vision check; shape carries the posts as well. Rendered at build time from `us-atlas` with `d3-geo`; no client JavaScript.
- **Timeline.** Milestones from 2016 to 2026, one colour per year band.
- **Bar figures** (`BarFigure`). One measure, navy bars, orange for RC's own rows, the value printed at the end of every bar, recessive gridlines and an optional dashed threshold line. Bars grow in once when scrolled into view. When rows carry portraits (the homepage's four students), each name and face sits above its bar, so long labels never squeeze the bars.
- **Study anatomy** (`StudyAnatomy`). Panel A traces one real student paper through its five stages (question, data, analysis, abstract, paper), each named with the real detail and the paper linked. Panel B shows what four kinds of first study need (patients, ethics review, hospital access), and why RC teaches the two that need none. It answers "what is research, concretely?" for a first-time visitor.
- **Dumbbell chart** (`Dumbbell`). Two values per row joined by a line, filled orange for the group that did better and hollow grey for the other, with the pair printed at the end. The homepage uses it for median publications of matched and unmatched non-U.S. IMGs in the ten specialties they apply to most (NRMP 2026).
- **Swimmer plot** (`Swimmer`). On phones each student gets a full-width lane with the name above and the outcome below, drawn at about one unit per pixel so the markers keep their size. After oncology papers: one lane per student from the first RC course to today, with a shape per milestone (open circle course, diamond first abstracts, filled circle first paper, triangle mentor role, star fellowship, match or major paper). Year-only dates sit at mid-year and the caption says so.
- **Match table** (`MatchTable`). On Student Results: one table for every Match year, grouped by year, with each student's own words in their row. It shows six students, then "Show all"; on phones each student is a stacked entry rather than a four-column table.
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
- Set every page as an article: an article head with the journal name, article type, light title and Plain Language Summary, then sections with plain headings and their paper names at the rule's end, then Article information and references.
- Make figures the richest thing on the page, and make them true: real names, programmes, dates and numbers. Label illustrative charts "Illustrative data".
- Cite claims with superscript numbers that link to a reference list, and link papers to their DOI.
- Keep `{colors.primary}` for buttons and small accents (drop cap, open padlock, highlighter). Use navy text on orange.
- Use `{colors.label-ink}` whenever orange appears as text.
- Keep printed things square (figures, tables, panels, photos) and interactive things round (buttons, avatars).
- Write in plain, specific, active sentences, like a well-edited paper: numbers over adjectives, names over "our students". Speak to the reader as "you" and about RC as "we". Keep the journal furniture (article types, section names, figure captions, page breaks) and let the whimsy live in it: the "Your Name" byline and its "Yes, you." note, the Retraction Notice on the 404 page. Say "student", never "mentee", except for one named mentor's mentee (see `CONTEXT.md`). Use American spelling (program, center, analyze, enroll), as JAMA and Circulation do.
- Put the figure a paragraph cites beside that paragraph.
- Give every fact, figure and table one owner page, and link to it from elsewhere instead of repeating it:

| Page | Owns |
|---|---|
| Home | The argument: Plain Language Summary, pathway, the NRMP comparison, what a study is, the mentoring model, student output, limitations |
| Courses | Which course fits which question, registration status for all five, how a method course runs |
| A course | Its facts, registration, outcomes, method figure, curriculum and what follows it |
| Match Mentorship | What is included, the year, match rates with three students' words, how to apply |
| Student Results | Headline numbers, careers map, swimmer plot, every student's words, papers, meeting photos, awards |
| Mentors | Faculty bios, research analysts, mentors, fellows, joining the team |
| About | Why RC exists, who it has trained, the decade, mission |
| Contact | Channels, registering without paying online, the two questions everyone asks |

- Honour the disclaimer everywhere it matters: RC offers mentorship and does not guarantee publications; authorship follows ICMJE.
- Keep one orchestrated motion on the homepage's first page: the Central Illustration lighting up stage by stage, then your name highlighted on the byline. Charts draw once as they scroll into view. Respect `prefers-reduced-motion`; without JavaScript every chart is simply drawn.

### Don't
- Don't mention RCOP anywhere on the RC site. RC serves international students; RCOP has its own site. RCOP statistics may be presented as RC's.
- Don't use RCOP-branded images (posters and posts carrying the RCOP logo).
- Don't justify body text on the web, or rely on `font-variant-caps` with Inter.
- Don't fill buttons or structure the layout with figure-palette colours.
- Don't print prices. Don't promote section names (Introduction, Methods…) back to headings, or bring back the structured abstract, Key Words or abbreviations boxes.
- Don't invent data. If a chart is an example, say so in its caption.
- Don't chop content into identical rounded cards; use sections, tables, figures and panels the way a journal would.
- Don't make the page full-bleed. The sheet on the desk is what makes the site read as a typeset paper.
- Don't leave a column empty beside text; give the section a figure or tighten it.
- Don't repeat a figure, table, quote list or FAQ on a second page. Don't add boilerplate blocks (how to cite, author contributions) to every page.
- Don't use eyebrow labels above headings or coloured left borders on callouts and quotes.
