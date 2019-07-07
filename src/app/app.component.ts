import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-test1';
}

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
