import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Note } from './models/note.model';
import { debounceTime, distinctUntilKeyChanged, filter } from 'rxjs/operators';
import { findNode } from '@angular/compiler';
import { MatSnackBar } from '@angular/material';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  selectedNote: Note;
  latestNote: Subject<Note> = new Subject<Note>();
  @ViewChild('editArea') editArea: ElementRef;

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
    this.latestNote
      .pipe(
        debounceTime(3000),
        filter(note => !!note.text),
        distinctUntilKeyChanged('text')
      )
      .subscribe(note => {
        const index = this.notes.findIndex(findNote => findNote.id === note.id);
        note.date = new Date().valueOf();
        if (-1 === index) {
          this.notes.unshift(note);
        } else {
          this.notes[index] = note;
        }
        this.selectedNote = Object.assign({}, note);
        this.snackBar.open('Saved', '', {
          duration: 2000,
        });
      });
   }

  ngOnInit(): void {
    this.http.get<Note[]>(`assets/data/apps/notes/notes.json`)
      .subscribe(notes => this.notes = notes);
  }

  selectNote(note: Note): void {
    this.selectedNote = Object.assign({}, note);
    setTimeout(() => {
      this.editArea.nativeElement.focus();
    }, 0);
  }

  addNewNote(): void {
    const newNote: Note = {
      id: Math.floor((Math.random() * 1000)).toString(),
      date: new Date().valueOf(),
      text: ''
    };
    this.selectedNote = newNote;
  }

  deleteNote(note: Note): void {
    const index = this.notes.findIndex(findNote => findNote.id === note.id);
    if (-1 !== index) {
      this.notes.splice(index, 1);
      this.selectedNote = null;
    } else {
      // We are removing a new note.
      this.selectedNote = null;
    }
  }

  noteChanged(note: Note): void {
    this.latestNote.next(note);
  }
}
