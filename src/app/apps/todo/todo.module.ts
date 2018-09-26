import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
