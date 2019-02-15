# Test Scenarios

Test Scenarios for Email part
| Test Case | Description | Expected Result | Actual result | Pass/Fail |
| --------- | ---------- | --------------- | ------------ |------------ |
| #1 | Typing Invalid Email | Error message: This email address is not valid  | | | |
| #2 | Entering a Valid email address that is not registered and Pressing Continue | Error message: User is not found |
| #3 | Empty Email field and Pressing  Continue | Error message: Please enter your email |  |  | |
| #4 | Entering Valid Email and pressing  Continue | Proceed to next page to select accounts |  |  | |


Test Scenarios for selecting Account, after a valid email was accepted
| Test Case | Description |  Expected Result | Actual result | Pass/Fail |
| --------- | ---------- | --------------- | ------------ |------------ |
| #1 | Not selecting any account| Error message: Select an account| | |
| #2 | Selecting an account and pressing Confirm | Proceed to next page| | |


Test Scenarios for Login
| Test Case | Description |  Expected Result | Actual result | Pass/Fail |
| --------- | ---------- | --------------- | ------------ |------------ |
| #1 | On arrival of the page, the email field is prepopulated with the valid email|  it is| | |
| #2 | Opon refreshing the page the email field is prepopulated with the valid email  | it is | | |
| #3 | Has remember me check box | it has  | | |
| #4 | Has Forgot password link that proceed to "welcome/login/forgotten-password" URI | it has | | |
| #5 | Prepoluated email on field, deleting email form field | Error message: Please enter email |
| #6 | Prepoluated email in field, deleting email form field, no password, hitting confirm button | Error message: Please enter email, Please enter password |
| #7 | Prepoluated email on field, deleting email form field, adding valid password, hitting confirm button | Error message: Please enter email |
| #8 | Prepoluated valid email, password field empty and hitting confirm | Error message: Please enter your password |
| #9 | Prepoluated valid email, typing less than 8 character long password | Error message: Your password must be at least 8 characters. |
| #10 | Prepoluated valid email, entering at least 8 chacarter long, invalid password and hitting confirm | Error message: Please enter your password |
| #11 | Prepoluated valid email, entering valid password and hitting confirm | Proceed to log in |
