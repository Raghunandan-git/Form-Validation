# Form Validation Project

This project demonstrates a simple HTML form with validation implemented using CSS for styling and JavaScript for dynamic validation. The form collects basic user information and ensures that all fields are properly validated before submission.

## Features

- **User Input Fields**: Includes fields for First Name, Last Name, Email Address, Mobile Number, Gender, Address, Password, and Confirm Password.
- **Validation**:
  - First Name and Last Name must contain only letters and be between 2 and 20 characters long.
  - Email must be in a valid format.
  - Mobile Number must be exactly 10 digits.
  - Gender selection is mandatory.
  - Address field cannot be empty.
  - Password must contain at least one uppercase letter, one digit, one special character, and have a minimum length of 8 characters.
  - Confirm Password must match the Password field.
- **Dynamic Feedback**: Displays error messages below invalid fields and clears them upon correction.
- **Responsive Button**: The submit button changes color on hover.

## File Structure

- `form.html`: Contains the HTML structure for the form.
- `style.css`: Contains the CSS styles for the form and its components.
- `validate.js`: Contains the JavaScript code for form validation.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone  https://github.com/Raghunandan-git/Form-Validation.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Form-Validation
   ```
3. Open the `form.html` file in any web browser to view and test the form.

## Usage

1. Fill out the form fields according to the provided rules.
2. Click the "Submit" button.
3. If all fields are valid, a success alert will appear.
4. If there are invalid fields, error messages will be displayed below them.

## Code Explanation

### `form.html`
- **Structure**: Defines the overall structure of the form using `<form>` and `<table>` tags.
- **Input Fields**: Each field has an associated `<label>` and `<input>` tag for accessibility and data entry.
- **Error Messages**: `<p>` elements with the class `error` are used to display validation messages dynamically.
- **Submit Button**: Includes a button with an `onclick` attribute linked to the validation function in `validate.js`.

### `style.css`
- **Container Styling**: The `.form-box` class styles the form's appearance, including background, padding, margin, and border radius.
- **Error Message Styling**: The `.error` class applies a red color, small font size, and italic style to error messages.
- **Button Styling**: The `button` element is styled for a professional look, with hover effects that change the background color.
- **Page Background**: Sets a calm, consistent background color for the entire page.

### `validate.js`
- **Helper Functions**:
  - `show(id, message)`: Displays an error message by setting the text content of the element with the given ID.
  - `clear(id)`: Clears the error message for the specified ID.
- **Validation Logic**:
  - **First Name and Last Name**: Checks for alphabetical characters between 2-20 in length using regular expressions.
  - **Email**: Validates the input against a standard email regex pattern.
  - **Mobile Number**: Ensures the input contains exactly 10 digits.
  - **Gender**: Ensures one of the radio buttons (Male or Female) is selected.
  - **Address**: Ensures the address field is not empty.
  - **Password**: Validates strength using a regex pattern to check for uppercase letters, digits, and special characters, with a minimum length of 8.
  - **Confirm Password**: Ensures it matches the Password field.
- **Form Submission**: Prevents submission if any validation fails, and shows a success alert if all validations pass.

## Validation Rules

- **First Name and Last Name**: Only letters, 2-20 characters.
- **Email**: Must be a valid email format.
- **Mobile Number**: Must be 10 digits long.
- **Gender**: One option must be selected.
- **Address**: Cannot be empty.
- **Password**: Minimum 8 characters, at least one uppercase letter, one number, and one special character.
- **Confirm Password**: Must match the Password.

## Screenshots

### Form Layout
![image](https://github.com/user-attachments/assets/e271408d-31a6-477c-bae6-6e9293a04131)


### Validation Errors
![image](https://github.com/user-attachments/assets/c1e1e760-ba3e-4aba-aca0-56100f8a9d1e)


###Form Submission
![image](https://github.com/user-attachments/assets/f274946b-54c2-42c6-875e-0aee641cb5c9)


## Contact

For any inquiries, please reach out to:
- **Email**: raghunandanp1304@gmail.com
- **GitHub**: Raghunandan-13

