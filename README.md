# passwordGenerator
A project to create a password with JavaScript

## Description
This project will propt the users with comfirm() methods to select each type of character (lowercas, uppercase, numeric, special), that they would like on their password. it will then prompt the usesto add a length for the password between 8-128 characters. A password then will be generated with said specifications.

## Usage
Click on Generate password. Select what characters you want to include in the password. Select number of characters. Characters will begenerated and returned in the page.

## Algorithm
In this application we manipulated an array, to add the characters of global arrays with each type of character. In order to ensure the apperance of every character a 5 case scenario was created. This will get the percebtages of the array containing all the characters selected and ensure that a character is grabbed from the ranges 0-20%, 20%-40%, 40%-60%, 60%-80%, and 80%-100% continusly until the number of characters specified was achieved. This was done since with the random nature of the selection, a character selected by the user may not be include. With this process we ensure all characters selected will appear in the password.

## Page URL
https://endres2.github.io/passwordGenerator/
