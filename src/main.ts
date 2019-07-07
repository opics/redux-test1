// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return [ ...state, 'Квартира'];
  }
  return [];
};

let state = reducer(undefined, {});

state = reducer(state, { type: 'ADD'});

console.log(state);

state = reducer(state, { type: 'ADD'});

console.log(state);
