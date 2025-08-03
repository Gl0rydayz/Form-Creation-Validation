# Form Creation and Validation

A comprehensive web project featuring a user registration form with client-side validation and API data fetching functionality implemented using vanilla JavaScript.

## Features

### Form Validation
- **Username Validation**: Must be at least 3 characters long
- **Email Validation**: Must contain both '@' and '.' characters
- **Password Validation**: Must be at least 8 characters long
- **Real-time Feedback**: Displays success or error messages based on validation results
- **Responsive Design**: Clean, modern UI that works on all devices

### API Data Fetching
- **Async Data Fetching**: Fetches user data from JSONPlaceholder API
- **Error Handling**: Graceful error handling for network issues
- **Dynamic List Display**: Displays user names in a clean list format
- **Loading States**: Shows loading message while fetching data

## Files Structure

```
Form-Creation-Validation/
├── index.html              # Main HTML file with the registration form
├── style.css               # CSS styling for the form
├── script.js               # JavaScript validation logic
├── fetch-data.html         # HTML file for API data display
├── fetch-data.css          # CSS styling for API data page
├── fetch-data.js           # JavaScript for API data fetching
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone or download this repository
2. Open `index.html` in your web browser to test the form validation
3. Open `fetch-data.html` in your web browser to test the API data fetching

## Validation Rules

- **Username**: Minimum 3 characters
- **Email**: Must contain '@' and '.' characters
- **Password**: Minimum 8 characters

## How It Works

### Form Validation
The form uses client-side validation with vanilla JavaScript:

1. **DOMContentLoaded Event**: Ensures the script runs after the HTML is fully loaded
2. **Form Submission Handling**: Prevents default form submission and handles validation
3. **Input Trimming**: Removes leading and trailing whitespace from all inputs
4. **Validation Logic**: Checks each field against specific criteria
5. **Feedback Display**: Shows success message or error messages based on validation results

### API Data Fetching
The API data fetching uses async/await with error handling:

1. **Async Function**: `fetchUserData()` handles all API operations
2. **API Endpoint**: Fetches data from `https://jsonplaceholder.typicode.com/users`
3. **Try-Catch Block**: Handles potential network errors gracefully
4. **Dynamic DOM Manipulation**: Creates and appends list items for each user
5. **Error Display**: Shows appropriate error message if data fetching fails

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## Browser Compatibility

Works in all modern browsers that support ES6 features. 