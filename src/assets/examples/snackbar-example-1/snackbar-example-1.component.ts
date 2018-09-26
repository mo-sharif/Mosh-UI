import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'example-snackbar-1',
  templateUrl: './snackbar-example-1.component.html',
  styleUrls: ['./snackbar-example-1.component.scss']
})
export class SnackbarExample1Component {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string): void  {
    this.snackBar.open(message, action, {
      duration: 3500,
    });
  }

}
