# Device platform project technical document

## Initial angular development envirenment

1. Config the .angular-cli.josn to generate module that out of app folder;

2. Integrate the jquery
    
```bash
# install jquery
npm install -s jquery
# install @types/jquery
npm install --save-dev @types/jquery
```

```js
// in .angular-cli.json 中
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
],

```

```js
// in tsconfig.app.json 
"compilerOptions": {
    "types": [
      "jquery"
    ]
  },

```

3. Integrate jquery plugin 

* Install the jquery plugin

```bash
npm install jquery-modal -s
```

* Import the plugin logic in globally environment

```js
// .angular-cli.json 中
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/jquery-modal/jquery.modal.min.js"
],

```

* Config the plugin declear types

```js
// in src/typing.d.ts 中

interface JQuery {
  modal(options?:any, callback?:Function):any;
}
```
 
* Import the plugin style in the spec component or in the global style.css 

```css
/* in app.component.css 中 */
@import "~jquery-modal/jquery.modal.min.css";

```

## Init the material 

## Init the routing'

## utilize resources which we already have

1. import the fly theme.css as global styles 

```css
/* in style.css */
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

/* import the fly theme css */
@import url(./assets/css/theme.css);
```

## debug environment config

* angular-cli serve config
   + --extract-css (aliases: -ec)
   + --sourcemap (aliases: -sm, sourcemaps)
   + --open (aliases: -o) default value: false
* config npm script
  + "debug": "ng serve -sm -ec -o"
   

