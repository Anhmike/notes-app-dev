/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {NotesList} from './components/notes-list/notes-list';
import {NotesService} from './services/notes';

@Component({
  selector: 'app'
})
@View({
  directives: [NotesList],
  template: `
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <notes-list></notes-list>
          </div>
          <div class="col-sm-9">
            <div class="panel panel-default" ng-hide="editing">
              <div class="panel-heading">
                <h3 class="panel-title">{content.title} <button class="btn btn-primary btn-xs pull-right" ng-click="editing = true">Edit</button></h3>
              </div>
              <div class="panel-body"></div>
              <div class="panel-footer">{content.date | date:'short'}</div>
            </div>
            <form name="editor" class="panel panel-default" ng-show="editing">
              <div class="panel-heading">
                <h3 class="panel-title"><input type="text" class="form-control" ng-model="content.title" placeholder="New Note" required /></h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-6">
                    <h3>Editor</h3>
                    <textarea class="form-control editor" rows="10" ng-model="content.content" placeholder="Note Content" required></textarea>
                  </div>
                  <div class="col-sm-6">
                    <h3>Preview</h3>
                    <div class="preview"></div>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <button class="btn btn-primary" ng-click="save()" ng-disabled="editor.$invalid">Save</button>
                <button class="btn btn-danger pull-right" ng-click="remove()" ng-if="content.id">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  `
})
class HelloWorldComponent {

}

bootstrap(HelloWorldComponent, [NotesService]);
