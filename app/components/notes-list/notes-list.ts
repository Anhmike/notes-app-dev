/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View, coreDirectives} from 'angular2/angular2';
import {Note, NotesService} from '../../services/notes';

@Component({
  selector: 'notes-list',
  appInjector: [NotesService]
})
@View({
  directives: [coreDirectives[0], coreDirectives[1]],
  template: `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title"><button class="btn btn-primary btn-xs pull-right" (click)="create()">New</button> My Notes</h3>
  </div>
  <div class="panel-body">
    <p *ng-if="!notes.length">No notes</p>
    <ul class="list-group">
      <li class="list-group-item" *ng-for="#note of notes; #i = index" (click)="view(i)" ng-class="{active: note.id == content.id}">
        {{note.title}}<br />
        <small>{{note.date}}</small>
      </li>
    </ul>
  </div>
</div>
`
})
export class NotesList {
  notes: Note[];

  constructor(notesService: NotesService) {
    this.notes = notesService.query();
  }

  create() {
    console.log('I want to create a new note');
  }

  view(index) {
    console.log('I want to view note at index ' + index);
  }
}
