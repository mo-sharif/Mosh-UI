import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar-pizza',
  template: `
    <span>
      Hey, wanna have a snack?
    </span>
  `
})
export class SnackbarPizzaExampleComponent {}

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(): void {
    this.snackBar.openFromComponent(SnackbarPizzaExampleComponent, {
      duration: 4000,
    });
  }
}
