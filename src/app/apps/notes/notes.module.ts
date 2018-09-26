import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

import { NotesComponent } from './notes/notes.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
