# Digital Menu Ordering System Prototype 

## Aknowledgments
This project is built on top of the Angular Express Seed With HTML (<https://github.com/dannyrdalton/angular-express-seed-with-html>) which is turn is adapted from Brian Ford's Angular Express Seed (<https://github.com/btford/angular-express-seed>).

## Intro
This app is built using AngularJS on the front, Express + Node on the back. Styled with SASS/SCSS.

## Getting Started

### Tools you will need
Git (<http://git-scm.com/book/en/Getting-Started-Installing-Git>)
Node (<http://nodejs.org/download/>)
Ruby (<http://www.rubyinstaller.org/>)
SASS (<http://sass-lang.com/install>)

## Steps
1. Clone the repository
2. Inside the project folder run `npm install` to grab the node dependencies

### To run the server
On the top level of the project run 'node app.js'

### To convert SASS/SCSS to CSS
On the top level of the project run 'sass --watch styleLayout/app.scss:public/css/app.css'


### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.


## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> final stylesheet (Don't Edit)
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers - Where most of our javascript should go
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    styleLayout/         --> SCSS stylesheets
      global/            --> stylesheets that apply application-wide
        Layout.scss           --> layout rules like height, width, margin
        Styles.scss           --> style rules like color, background-color, font-size
        Variable.scss         --> variable rules to apply to other files
      app.scss           --> file to include all other files in one place.
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      partials/         --> angular view partials (partial html files)
        about.html
        appetizer.html
        home.html
        orderPlaced.html
        reviewOrder.html
