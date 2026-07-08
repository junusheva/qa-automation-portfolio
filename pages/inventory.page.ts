import { type Page, type Locator } from '@playwright/test';

/**
 * Page Object for the saucedemo inventory (products) page.
 * Minimal for now — grows as cart/checkout suites are added.
 */
export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title'); // "Products"
    this.inventoryList = page.locator('.inventory_list');
  }
}
