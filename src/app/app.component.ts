import { Component, OnInit } from '@angular/core';
import { createStore } from 'redux';
import { addObject, removeObject } from '../actions';
import reducer from '../reducers';

const store = createStore(reducer);

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
    store.dispatch(addObject(rnd));
  }

  remove() {
    store.dispatch(removeObject());
  }

  get() {
    this.list =  store.getState() as string[];
  }
}












