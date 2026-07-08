import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object for the saucedemo login page.
 *
 * Pattern notes:
 * - Locators are defined once in the constructor; tests never touch selectors.
 * - Methods represent user actions (login) or expose state (errorMessage)
 *   but contain NO assertions — assertions belong in the test files.
 * - saucedemo ships stable `data-test` attributes; prefer those over CSS
 *   classes, which change when styling changes.
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorIcons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorIcons = page.locator('.error_icon');
  }

  async goto() {
    await this.page.goto('/');
  }

  /** Fills whichever credentials are provided and submits the form. */
  async login(username: string, password: string) {
    if (username) await this.usernameInput.fill(username);
    if (password) await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
