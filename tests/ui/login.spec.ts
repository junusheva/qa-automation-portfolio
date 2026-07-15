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
  
  // TC-03
  test('login blocked when both input fields are empty', async () => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage).toHaveText(errorMessages.emptyUsername);
    await expect(loginPage.errorIcons).toHaveCount(2);
  });

  // TC-04
  test('login blocked when password field is empty', async () => {
    await loginPage.login(users.standard.username, '');

    await expect(loginPage.errorMessage).toHaveText(errorMessages.passwordRequired);
    await expect(loginPage.errorIcons).toHaveCount(2);
  });

  // TC-05
  test('login blocked when username field is empty', async () => {
    await loginPage.login('', users.standard.password);

    await expect(loginPage.errorMessage).toHaveText(errorMessages.usernameRequired);
    await expect(loginPage.errorIcons).toHaveCount(2);
  });

  // TC-06
  test('login blocked when password is wrong', async () => {
    await loginPage.login(users.standard.username, 'wrongpassword');

    await expect(loginPage.errorMessage).toHaveText(errorMessages.noMatch);
    await expect(loginPage.errorIcons).toHaveCount(2);
  });
});
