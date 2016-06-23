# About

This is a very basic Node/Express app because chrome isn't happy running React just in the browser.

# Getting started

Clone this repo. Then run `npm install`. To run the server, run `npm start` - this will run the server on port 3000.

# Writing react code

Write your components in main.js. Then, in order to view them, you'll have to run webpack. run the following command:
`webpack main.js public/javascripts/bundle.js --module-bind 'js=babel-loader'`
