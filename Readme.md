# ATM System Assignment Specification

## Overview

Design and implement a console-based ATM system using object-oriented programming principles. The system should simulate real-world ATM operations, allowing users to interact with their bank accounts securely and efficiently.

---

## Functional Requirements

- **User Authentication:**

  - Users must insert a card (enter card number) and input a valid PIN to access their account.
  - The system locks the card after three failed PIN attempts.

- **Account Operations:**

  - Withdraw money
  - Deposit money
  - Check account balance
  - Print transaction receipt (display on console)
  - Change PIN

- **Session Management:**
  - After each transaction, prompt the user to continue or exit.
  - End session on user request or after card lock.

---

## Input and Output Specifications

### Inputs

- **Card Number:** String/number entered by the user.
- **PIN:** Numeric input, masked for security.
- **Transaction Type:** Menu selection (withdraw, deposit, balance inquiry, change PIN, exit).
- **Amount:** Numeric input for deposit/withdrawal (must be positive, multiple of 100).
- **New PIN:** Numeric input for PIN change.

### Outputs

- **Transaction Confirmation:** Success/failure messages for each operation.
- **Updated Balance:** Displayed after transactions.
- **Error Messages:** For invalid inputs, insufficient funds, or failed authentication.
- **Receipt:** Summary of the transaction displayed on the console.

---

## Validations

- **PIN Validation:**

  - Must match the stored PIN for the card.
  - Lock card after three failed attempts.

- **Amount Validation:**

  - Withdrawals and deposits must be positive and in multiples of 100.
  - Withdrawals cannot exceed available balance.
  - Maximum withdrawal limit per transaction (e.g., ₹20,000).

- **Input Validation:**

  - All fields must be non-empty and of correct type.
  - PIN must be 4 digits.

- **Security:**
  - Do not display PIN or store it in plain text.
  - Do not allow access to account data without successful authentication.

---

## Required Classes and Fields

| Class       | Fields/Attributes                                 | Methods/Functions                                    |
| ----------- | ------------------------------------------------- | ---------------------------------------------------- |
| Bank        | accounts (list), atms (list)                      | find_account(), add_account()                        |
| ATM         | location, managed_by (Bank)                       | perform_transaction(), authenticate_user()           |
| Account     | account_number, balance, pin, transactions (list) | deposit(), withdraw(), check_balance(), change_pin() |
| Transaction | transaction_id, date, type, amount, status        | print_receipt()                                      |
| Customer    | name, card_number, linked_accounts (list)         | authenticate(), get_accounts()                       |

---

## Functions to Implement

- **Main Menu:**

  - Display options: Withdraw, Deposit, Balance Inquiry, Change PIN, Exit.

- **Authentication:**

  - Input card number and PIN; validate credentials.

- **Withdraw:**

  - Input amount, validate, deduct from balance, print receipt.

- **Deposit:**

  - Input amount, validate, add to balance, print receipt.

- **Balance Inquiry:**

  - Display current balance.

- **Change PIN:**

  - Input old PIN, validate, input new PIN, update.

- **Receipt Generation:**

  - After each transaction, display summary (amount, type, date, balance).

- **Error Handling:**
  - Handle invalid inputs, insufficient balance, and system errors gracefully.

---

## Example Input/Output

### Example 1: Successful Withdrawal

``Insert your card: 12345678
Enter PIN: \*\*\*\*
Login successful.

Select transaction:

1.Withdraw

2.Deposit

3.Balance Inquiry

4.Change PIN

5.Exit

Enter choice: 1
Enter amount to withdraw: 5000

Transaction successful. Please collect your cash.
Your current balance is: ₹15,000

Do you want another transaction? (y/n): n
Thank you for using our ATM.``
##
### Example 2: Failed Authentication

Insert your card: 12345678
Enter PIN: \*\*\*\*

Incorrect PIN. Attempts left: 2

Enter PIN: \*\*\*\*

Incorrect PIN. Attempts left: 1

Enter PIN: \*\*\*\*
Card locked due to too many failed attempts. Please contact your bank.

---
