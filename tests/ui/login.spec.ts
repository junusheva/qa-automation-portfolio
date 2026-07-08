import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { users, errorMessages } from '../../fixtures/users';

/**
 * Login suite.
 * Source: docs/manual-test-cases.md (TC-01 … TC-06).
 * Each automated test references its manual test case ID.
 */
test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // TC-01 — smoke
  test('successful login with valid credentials', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    const inventoryPage = new InventoryPage(page);
    await expect(page).toHaveURL(/.*inventory\.html/);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  // TC-02
  test('login blocked for the locked out user', async () => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    await expect(loginPage.errorMessage).toHaveText(errorMessages.lockedOut);
    await expect(loginPage.errorIcons).toHaveCount(2);
  });

  // ── Your turn (week 2) ─────────────────────────────────────────────
  // Translate the remaining manual cases following the pattern above:
  //
  // TODO: TC-03 — login blocked when both input fields are empty
  //   hint: loginPage.login('', '') — the fill() calls are skipped,
  //   only the button is clicked.
  //
  // TODO: TC-04 — login blocked when password field is empty
  //
  // TODO: TC-05 — login blocked when username field is empty
  //
  // TODO: TC-06 — login blocked when password is wrong
  //   hint: errorMessages.noMatch is already in fixtures/users.ts
  //
  // Stretch goal: TC-03..06 share a shape (input combo → expected error).
  // Look up "parameterized tests" in Playwright docs and rewrite them as
  // a single data-driven loop. Then decide: is the loop actually more
  // readable, or were four explicit tests better? (Real teams debate
  // this — having an opinion with reasons is interview material.)
  // ───────────────────────────────────────────────────────────────────
});
