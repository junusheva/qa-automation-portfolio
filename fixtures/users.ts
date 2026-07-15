/**
 * Test data: saucedemo user accounts.
 * These are public demo credentials published on the saucedemo login page.
 * In a real project, credentials would come from environment variables or a
 * secrets manager — never committed to the repo.
 */
export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce',
  },
} as const;

export const errorMessages = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
  emptyUsername: 'Epic sadface: Username is required',
  noMatch:
    'Epic sadface: Username and password do not match any user in this service',
} as const;
