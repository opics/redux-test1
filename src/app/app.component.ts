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
import { addObject, removeObject } from '../actions';

const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return [ ...state, action.payload ];
  }
  if (action.type === 'REMOVE') {
    return [ ...state.splice(-1, 1)];
  }
  return state;
};

const rnd = () => Math.floor(Math.random() * 9) + 1;

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addObject(rnd()));

store.dispatch(addObject(rnd()));
