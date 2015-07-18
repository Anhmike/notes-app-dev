/// <reference path="../../typings/tsd.d.ts" />
var NotesService = (function () {
    function NotesService() {
        var stored = localStorage.getItem('notes');
        try {
            stored = JSON.parse(stored);
        }
        catch (err) {
            stored = [];
        }
        this._notes = stored;
    }
    NotesService.prototype.query = function () {
        return this._notes;
    };
    return NotesService;
})();
exports.NotesService = NotesService;
