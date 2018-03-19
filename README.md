# AlbumCatalog

Music album catalog using node.js, angular and mysql.

## Setup

On infra folder you will find `mysql-container.cmd` file, just run it with docker and the mysql database will be setted.

To setup the database data run
```
mysql -uroot -p

password

source ./music.sql;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';

exit;
```

Run `npm install` to get all dependencies downloaded.

## Build

Run `npm run build` to build and run the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Development server

Run `npm run build` for build and start a dev server. Navigate to `http://localhost:3000/` for the main page and `http://localhost:3000/api/` for the API.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
