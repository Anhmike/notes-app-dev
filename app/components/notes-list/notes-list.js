/// <reference path="../../../typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var notes_1 = require('../../services/notes');
var NotesList = (function () {
    function NotesList(notesService) {
        this.notes = notesService.query();
    }
    NotesList.prototype.create = function () {
        console.log('I want to create a new note');
    };
    NotesList.prototype.view = function (index) {
        console.log('I want to view note at index ' + index);
    };
    NotesList = __decorate([
        angular2_1.Component({
            selector: 'notes-list',
            appInjector: [notes_1.NotesService]
        }),
        angular2_1.View({
            directives: [angular2_1.coreDirectives[0], angular2_1.coreDirectives[1]],
            template: "\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><button class=\"btn btn-primary btn-xs pull-right\" (click)=\"create()\">New</button> My Notes</h3>\n  </div>\n  <div class=\"panel-body\">\n    <p *ng-if=\"!notes.length\">No notes</p>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ng-for=\"#note of notes; #i = index\" (click)=\"view(i)\" ng-class=\"{active: note.id == content.id}\">\n        {{note.title}}<br />\n        <small>{{note.date}}</small>\n      </li>\n    </ul>\n  </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [notes_1.NotesService])
    ], NotesList);
    return NotesList;
})();
exports.NotesList = NotesList;
