# Manual Test Cases — saucedemo.com Login

Test basis: expected behavior of the saucedemo login page (specification-based design).
Techniques used: equivalence partitioning (valid vs. invalid credential classes),
boundary/empty-input analysis.

Automated coverage: TC-01, TC-02 → `tests/ui/login.spec.ts` (remaining cases in progress).

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|----|-------|---------------|-------|-----------------|----------|
| TC-01 | Successful login with valid credentials | Unauthenticated user is on the saucedemo login page | 1. Insert username `standard_user` and password `secret_sauce`<br>2. Click **Login** | 1. The user is logged in<br>2. The main screen with products is viewed | High |
| TC-02 | Login blocked for the locked out user | Unauthenticated user is on the saucedemo login page | 1. Insert username `locked_out_user` and password `secret_sauce`<br>2. Click **Login** | 1. Both input fields show error icons<br>2. Error message "Epic sadface: Sorry, this user has been locked out." is shown above the button | High |
| TC-03 | Login blocked when input fields are empty | Unauthenticated user is on the saucedemo login page | 1. Click **Login** | 1. Both input fields show error icons<br>2. Error message "Username is required." is shown above the button | Medium |
| TC-04 | Login blocked when password input field is empty | Unauthenticated user is on the saucedemo login page | 1. Insert username `standard_user`<br>2. Click **Login** | 1. Both input fields show error icons<br>2. Error message "Password is required." is shown above the button | Medium |
| TC-05 | Login blocked when username input field is empty | Unauthenticated user is on the saucedemo login page | 1. Insert password `any_password`<br>2. Click **Login** | 1. Both input fields show error icons<br>2. Error message "Username is required." is shown above the button | Medium |
| TC-06 | Login blocked when password is wrong | Unauthenticated user is on the saucedemo login page | 1. Insert username `standard_user` and wrong password `wrong_password`<br>2. Click **Login** | 1. Both input fields show error icons<br>2. Error message "Epic sadface: Username and password do not match any user in this service" is shown above the button | High |

## Smoke suite

The High-priority cases (TC-01, TC-02, TC-06) form the login smoke suite:
authentication success, account security, and credential rejection.
