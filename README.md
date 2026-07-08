# QA Automation Portfolio

<!-- Once pushed to GitHub, replace YOUR_USERNAME/YOUR_REPO below and this badge goes green -->
![Playwright Tests](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/playwright.yml/badge.svg)

Test automation framework for [saucedemo.com](https://www.saucedemo.com), built with
**Playwright + TypeScript**. Includes manual test design, UI automation, API tests, and CI.

Built by [Aijan Amanbekova](https://www.linkedin.com/in/ayaijan/) — full-stack engineer
(4+ years, US B2B SaaS) transitioning into QA automation.

<!-- TODO week 5: screenshot of the HTML report goes here -->

## Quick start

```bash
npm ci
npx playwright install chromium
npm test          # run all tests
npm run report    # open the HTML report
```

## What's covered

| Area | Type | Test basis | Location |
|------|------|-----------|----------|
| Login | UI, automated | [Manual test cases TC-01…06](docs/manual-test-cases.md) | `tests/ui/login.spec.ts` |
| <!-- TODO: cart --> | | | |
| <!-- TODO: API suite (week 3) --> | | | |

Manual artifacts live in [`/docs`](docs/): test case design with techniques labeled,
and [bug reports](docs/bug-reports.md) written against saucedemo's deliberately
broken `problem_user` account.

## Structure

```
tests/ui/      UI specs (Playwright)
tests/api/     API specs (Playwright request context) — week 3
pages/         Page Object Model classes
fixtures/      test data and custom fixtures
docs/          manual test design: test cases, bug reports, test plan
```

## Decisions

<!-- This section is what interviews get built from. Keep it honest and short. -->

- **Page Object Model** — selectors live in one place; tests read as user behavior,
  not CSS archaeology.
- **`data-test` attributes over CSS classes** — saucedemo ships stable test hooks;
  styling changes shouldn't break tests.
- **No assertions inside page objects** — pages expose state, tests decide what
  correct means. Keeps page classes reusable across positive and negative cases.
- **Retries on CI only** — locally, flakiness should be loud so it gets fixed,
  not retried into silence.
- <!-- TODO: add your own as you make real choices -->

## What's next

- [ ] TC-03…06 automated (week 2)
- [ ] API test suite against a public API (week 3)
- [ ] Flagship project: test plan + suites for a real application (week 4)
- [ ] CI report publishing + this README's screenshot (week 5)
