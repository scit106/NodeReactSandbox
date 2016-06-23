# About

This is a very basic Node/Express app because chrome isn't happy running React just in the browser.

# Getting started

Clone this repo. Then run `npm install`. 
You also need webpack installed on your machine. `npm install -g webpack`
To run the server, run `npm start` - this will run the server on port 3000.

# Writing react code

Write your components in main.js. Then, in order to view them, you'll have to run webpack. You can either restart the server (ctrl-c and then npm start), or run the following command to compile everything:
`webpack main.js public/javascripts/bundle.js --module-bind 'js=babel-loader'`
