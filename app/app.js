/// <reference path="../typings/tsd.d.ts" />
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
var notes_list_1 = require('./components/notes-list/notes-list');
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent = __decorate([
        angular2_1.Component({
            selector: 'app'
        }),
        angular2_1.View({
            directives: [notes_list_1.NotesList],
            template: "\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <notes-list></notes-list>\n          </div>\n          <div class=\"col-sm-9\">\n            <div class=\"panel panel-default\" ng-hide=\"editing\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{content.title} <button class=\"btn btn-primary btn-xs pull-right\" ng-click=\"editing = true\">Edit</button></h3>\n              </div>\n              <div class=\"panel-body\"></div>\n              <div class=\"panel-footer\">{content.date | date:'short'}</div>\n            </div>\n            <form name=\"editor\" class=\"panel panel-default\" ng-show=\"editing\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\"><input type=\"text\" class=\"form-control\" ng-model=\"content.title\" placeholder=\"New Note\" required /></h3>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <h3>Editor</h3>\n                    <textarea class=\"form-control editor\" rows=\"10\" ng-model=\"content.content\" placeholder=\"Note Content\" required></textarea>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <h3>Preview</h3>\n                    <div class=\"preview\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"panel-footer\">\n                <button class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"editor.$invalid\">Save</button>\n                <button class=\"btn btn-danger pull-right\" ng-click=\"remove()\" ng-if=\"content.id\">Delete</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
})();
angular2_1.bootstrap(HelloWorldComponent);
