# Radix Shift — Unified ROI Architect

> **Model the financial and operational case for internal controls transformation — in a single browser tab.**

Radix Shift is a lightweight, zero-dependency ROI modeling tool for finance, internal audit, and controls transformation leaders. It helps quantify the "Baseline Friction Debt" of a current-state control environment and models the "Transformation Dividend" unlocked by moving controls to a Shared Services / CoE hub and automating manual testing.

---

## What It Does

Given a portfolio of internal controls (an RCM — Risk and Control Matrix), Radix Shift calculates:

- **Baseline Friction Debt** — the fully-loaded annual cost of performing every control manually at local rates, plus internal audit ToD/ToE hours.
- **Annual Transformation Dividend** — the net value realized by migrating controls to a centralized hub (Pilot or Global) and automating audit testing.
- **Internal Capacity Reclaimed** — the FTE-equivalent hours freed up for strategic risk work, once hub industrialization gains and automation are applied.

All calculations update in real time as you build and modify your control portfolio.

---

## Key Concepts

| Term | Meaning |
|---|---|
| **Local Rate** | Burdened hourly cost of a business-unit operator performing controls today |
| **EU SSC Rate** | Hourly rate at a European shared service centre |
| **Asia SSC Rate** | Hourly rate at an Asian/India-based SSC (used in Global Hub mode) |
| **Internal Rate** | Hourly cost of Internal Audit professionals |
| **CoE Efficiency Lift (%)** | Industrialization gain from centralizing fragmented country work into one specialized centre |
| **Auto Test Target (hrs)** | Human-in-the-loop hours needed annually to review AI/automated test output |
| **Node Dividend** | Per-control value created through hub migration or automation |

---

## Screens

### Home — Executive Dashboard
Top-line summary of Transformation Dividend (annual $), FTE capacity reclaimed, and Baseline Friction Debt. Toggle between **Pilot Hub** (single SSC rate) and **Global Hub** (dual SSC rate, routing India-geography controls to the Asia rate).

### Architect — Control DNA Workbench
Build and edit your control portfolio. Each control card captures:
- Control ID, cycle, process, sub-process
- Geography, IT system, frequency, complexity
- Operator hours per performance
- Internal Audit ToD walkthrough hours and ToE hours
- Risk mitigated and control objective

Per-control actions: **Move to Hub** (SSC migration), **Automate** (AI/system-based testing), **Clone DNA**.

### Config — Model Levers
Adjust all financial assumptions and scenario inputs. Contextual glossary cards explain each lever. Supports **Best / Base / Worst** scenario switching (efficiency multipliers of 45% / 35% / 15%).

---

## Getting Started

No build step. No server. No installation.

```bash
# Clone the repo
git clone https://github.com/your-org/radix-shift.git

# Open in browser
open index.html
```

That's it.

---

## Technology

- **React 18** (via CDN, no build tooling required)
- **Tailwind CSS** (via CDN)
- **Babel Standalone** (JSX transpilation in-browser)
- **Plus Jakarta Sans** (Google Fonts)

All logic is contained in `index.html`. There are no backend dependencies, no API calls, and no data leaves the browser.

---

## Project Structure

```
radix-shift/
└── index.html     # Entire application — UI, logic, styles
```

---

## Roadmap

See [Improvements](#suggested-improvements) below for the prioritised backlog.

---

## License

MIT
