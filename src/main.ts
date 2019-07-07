// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { createStore } from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return [ ...state, `Квартира ${action.payload}`];
  }
  return [];
};

const rnd = () => Math.floor(Math.random() * 9) + 1;

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'ADD', payload: rnd()});

store.dispatch({type: 'ADD', payload: rnd()});
