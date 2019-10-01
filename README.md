# UdemyAngularTheCompleteGuide

The project consists on a Recipe Book app, it has 2 features, a shopping list where ingredients are listed, and a recipe list, where recipes are listed.

It uses [firebase](https://firebase.google.com) as backend, it is using authentication to be able to fetch data from firebase.
The user can create new recipes and save them to the database.

The app was deployed to Heroku: https://udemy-angular-complete-guide.herokuapp.com

You can use this dummy user to test it:
- User: **admin@mail.com**
- Pass: **123456**

To add the PWA functionality basically I had to type: `ng add @angular/pwa` and then it automatically created all the configuration files. After that I only had to deploy whatever is on the `dist/` folder into a server and try to access the site without an internet connection (I emulate the offline functionality on Chrome Dev Tools).

To add SSR (Server-Side Rendering) I had to install `Angular Universal` via npm: `ng add @nguniversal/express-engine --clientProject udemy-angular-the-complete-guide`.
There's something to notice in this command and is the text after the `--clientProject` parameter; the clientProject name can be found in the `angular.json` file inside the `projects` property.
For this project I had to make use of other features, from `@angular/core` and `@angular/common` to do certain stuff depending if the app is being rendered in the server or in the browser (check line 19 of  the app.component file).
I also had to install `@nguniversal/module-map-ngfactory-loader`.

In theory I shouldn't include the `dist/` folder since normally the build is done using a CI/CD tool, but for testing purposes and to be able to deploy the app on Heroku, I included it

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
