/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-world'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
class HelloWorldComponent {
  name: string;

  constructor() {
    this.name = 'Jimmy';
  }
}

bootstrap(HelloWorldComponent);
