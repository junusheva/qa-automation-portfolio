import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration.
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Fail the build on CI if test.only was accidentally committed
  forbidOnly: !!process.env.CI,

  // Retry on CI only — locally a flaky test should be visible, not hidden
  retries: process.env.CI ? 2 : 0,

  // HTML report is generated after every run; open with `npm run report`
  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: 'https://www.saucedemo.com',

    // Collect trace on first retry — invaluable for debugging CI failures
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to run cross-browser:
    // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
