/// <reference path="../../typings/tsd.d.ts" />

export interface Note {
  id: number,
  title: string,
  content: string,
  date: string
}

export class NotesService {

  private _notes: Note[];

  constructor() {
    let stored = localStorage.getItem('notes');

    try {
      stored = JSON.parse(stored);
    } catch (err) {
      stored = [];
    }

    this._notes = stored;
  }

  query() {
    return this._notes;
  }
}
