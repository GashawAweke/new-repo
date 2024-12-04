# Node and Express Tutorial

## Node Tutorial

- what is nodejs
  - environment to run js outside browser
  - buitl on chome's v8 js engine, the thing that translate the code to machine code
  - big community
  - full stack
- requirements
  - callbacks promises, asyc-await
- browser javascript vs
  - DOM
  - interactive
  - window
- node js
  - no DOM
  - consist of pure logic, no graphical interface
  - no window
  - access to file system: info about our OS, respoond to network quest.
  - do not depende on nodejs version, not on users side.
  - you access to modules by default. uses commonJS under the hood.
  ### GLOBAL VARIABLES
  <!--
  __dirname: path to current directly
  __filename: file name
  require: function to use modules (commonJS)
  module: info about current module (file)
  process: info about env where the program is being executed
   -->

### modules

- commonJS, every files in node is module (by default)
- modules: encapsulated code (only share miniumum)
- local variables - do not export local variables
- every time you create modules you have to start with `./`
- there are different exporting methods
- when you import a module you actually invoke it

#### built in modules

- you can find the list of all built-in moduels in the doc of nodejs.org and selecting your node version

##### OS

##### PATH

##### FS

##### HTTP

- createServer(): contains giant request and response objects as parameter

### NPM

- enables us to
  - to use our code in other porject
  - use others code
  - and share ours
- the project is hosted at npmjs.com
- npm calls the reusable code, a package

  - package/dependency/module: a folder that contain javascript code

- local dependency: `npm i <packageName>`
- global dependency: for all projects: `npm i -g <packageName>` or `sudo npm i -g <packageName>` for mac

- package.json
  - manifest file (stores important info about project/package)
  - manual approach (create package.json in the root, and then create properties etc)
  - npm init (step by step, press enter to skip)
  - npm init -y (everything default )

## Express Tutorial

## Task Manager (MongoDB, Mongoose)

## Store API

## JWT Basics

## Jobs API

## File Upload (local and cloudinary)

## Send Email (nodemailer,ethereal and sendgrid )

## Stripe Payment

## E-Commerce API

## Auth Workflow (verify email, reset password)
