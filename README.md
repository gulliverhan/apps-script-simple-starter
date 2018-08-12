
## Google Apps Script Simple Starter

There are several different Apps Script Starter already out there - why one more?
This starter template doesn't transpile or bundle your javascript - which I find makes debugging in the GAS user interface MUCH simpler.

#### Include external javascript

Built in is a way to include external javascript quickly without having to try and find a Google Apps Script Libary file.


#### ESLint

A popular linting engine that analyzes your JavaScript code for correctness and highlights the errors in real time before you even compile the code, thus reducing the development time.


#### GASTap testing framework

A code testing framework for Google Apps Script

#### Google CLASP

A command line utility for working with Google Apps Script projects. You can develop code locally and push it to production, manage your manifest file, deploy web apps and publish new versions of apps.


#### Visual Studio Code

This incredibly powerful source code editor from Microsoft provides an integrated development environment and has built-in support for Emmet, Intellisense for code autocompletion, Command Line Terminal, Git integration, Node.js , TypeScript and more.


#### Prettier

A code formatter that will beautify your JavaScript, JSON, HTML and CSS stylesheets according to a set of rules and styles widely accepted by programmers.


#### Google standard

Developers have their own unique style of writing code. This uses Google's coding standard.

## Getting Started 

Setting up a modern development environment for building Google Apps Script projects is easy and quick. You also need to install Node.js which includes the npm package manager.

1\. Clone the repository and install npm dependencies
```
git clone https://github.com/gulliverhan/apps-script-simple-starter
cd apps-script-simple-starter 
npm install
```        

2\. Log in to Google clasp and authorize with your Google account.
```
npx clasp login
```

3\. Replace the "scriptId" value in the .clasp.json file.

4\. push the project
```
gulp push
```
5\. open the script in the GAS UI
```
gulp open
```
          
The `apps_script` directory contains the code you should edit that is pushed to Google Apps Script.


#### Contributions 🙏🏼

Contributions and feature requests are welcome. If you are using the Google Apps Script starter package and fixed a bug for yourself, please consider submitting a PR!
