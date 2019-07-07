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
import reducer from '../reducers';

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const rnd = () => Math.floor(Math.random() * 9) + 1;

store.dispatch(addObject(rnd()));

store.dispatch(addObject(rnd()));
