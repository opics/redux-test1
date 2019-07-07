import { Component, OnInit } from '@angular/core';
import { createStore, bindActionCreators } from 'redux';
import * as actions from '../actions';
import reducer from '../reducers';

const store = createStore(reducer);

const { addObject, removeObject } = bindActionCreators(actions, store.dispatch);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public list: string[] = [];

  ngOnInit() {
    store.subscribe(() => this.get());
  }

  add() {
    const rnd = Math.floor(Math.random() * 9) + 1;
    addObject(rnd);
  }

  remove() {
    removeObject();
  }

  get() {
    this.list =  store.getState() as string[];
  }
}












