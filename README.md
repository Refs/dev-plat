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
   

## Initial ngrx store


1. install dependencies

```bash
npm install -s @ngrx/store@5.2.0 @ngrx/effects@5.2.0 @ngrx/router-store@5.2.0 @ngrx/store-devtools@5.2.0 @ngrx/entity@5.2.0

```

2. install and config ngrx schematics

```bash
npm install --save-dev @ngrx/schematics@5.2.0 

```
3. install ngx-store-freeze

> Meatreducer:  https://www.npmjs.com/package/ngrx-store-freeze 之所以去引入 MetaReducer 是为了使用 ngrx-store-freeze 插件，防止状态突变； 下面的写法都是 固定的写法；
```ts
import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment'; // Angular CLI environment
 
export interface State {
  // reducer interfaces
}
 
export const reducers: ActionReducerMap<State> = {
  // reducers
}
 
export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze]: [];
 
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
  ]
})
export class AppModule {}

```
