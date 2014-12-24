ngTypoCrusher
===========

Angularjs implementation of the far superior Typo Crusher - `http://alanrice.github.io/typo-crusher/`

### Getting Started

* The http server is retrieved using `npm`, the [node package manager][npm].
* The angular and font awesome code is retrieved using `bower`, a [client-side code package manager][bower].

`npm` has been configured to automatically run `bower` so simply run:

```
npm install
```

The .bowerrc file ensures the components are added to the 'app/bower_components' directory, instead of the default root directory

on completion run
```
npm start
```
to run the webserver and open the app itself at `http://localhost:8000/app/index.html` 

## Directory Layout

```
app/                      --> all of the source files for the application
  typoCrusher/            --> the main application code
    typoCrusher.html            --> the application template
    typoCrusher.js              --> the controller logic
    typoCrusher.css             --> the style sheet for the application
  index.html              --> the main html template file of the app
