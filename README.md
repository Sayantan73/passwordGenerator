# Password Generator

A simple password generator built with JavaScript, HTML, and CSS.

## Features

* Generates a random password based on user input
* Allows users to select password length and character types (uppercase, lowercase, numbers, symbols)
* Displays password strength indicator
* Copies generated password to clipboard

## Usage

1. Open the `index.html` file in a web browser
2. Select the desired password length and character types using the checkboxes and slider
3. Click the "Generate Password" button to generate a password
4. The generated password will be displayed in the password display field
5. Click the "Copy" button to copy the password to the clipboard

## Code Structure

The code is organized into the following files:

* `script.js`: contains the JavaScript code for the password generator
* `index.html`: contains the HTML structure for the password generator
* `style.css`: contains the CSS styles for the password generator (not included in this repository)

## Functions

The following functions are used in the password generator:

* [handleSlider()](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/js/passwordGeneretor/script.js:22:0-26:1): updates the password length display and slider value
* [setIndicator(color)](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/js/passwordGeneretor/script.js:28:0-30:1): sets the password strength indicator color
* [getRandomInteger(min, max)](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/js/passwordGeneretor/script.js:32:0-34:1): generates a random integer between `min` and `max`
* [getRandomNumber()](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/js/passwordGeneretor/script.js:36:0-38:1): generates a random number between 0 and 9
* `generatePassword()`: generates a password based on user input

## Variables

The following variables are used in the password generator:

* `passwordLength`: the length of the password to be generated
* `checkCount`: the number of character types selected by the user
* `password`: the generated password
* `symbols`: a string of symbols used in password generation

## License

This code is licensed under the MIT License.