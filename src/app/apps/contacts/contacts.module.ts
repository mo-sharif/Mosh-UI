import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsModule { }
