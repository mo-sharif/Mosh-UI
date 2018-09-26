import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-colors-dialog-popup',
  template: `
    <h1 mat-dialog-title>{{ data }}</h1>
    <mat-dialog-content>
      <mat-list>
        <mat-list-item *ngFor="let hue of gridHues"
          [ngClass]="'portal-' + data + '-' + hue">
          <h3>{{ hue }}</h3>
        </mat-list-item>
      </mat-list>
    </mat-dialog-content>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close i18n>Close</button>
    </div>
  `,
  styles: [`
    .mat-dialog-content {
      padding: 0;
    }
  `]
})
export class DialogPopupColorComponent {
  gridHues: string[];

  constructor(
    public dialogRef: MatDialogRef<DialogPopupColorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.gridHues = [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
        'A100',
        'A200',
        'A400',
        'A700'
      ];
    }
}

@Component({
  selector: 'colors-example',
  templateUrl: './colors-example.component.html',
  styleUrls: ['./colors-example.component.scss']
})
export class ColorsExampleComponent {
  gridColors: string[];

  constructor(public dialog: MatDialog) {
    this.gridColors = [
      'red',
      'pink',
      'purple',
      'deep-purple',
      'indigo',
      'blue',
      'light-blue',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deep-orange',
      'brown',
      'grey',
      'blue-grey',
      'white'
    ];
  }

  openDialog(color: string): void {
    const dialogRef = this.dialog.open(DialogPopupColorComponent, {
      width: '400px',
      data: color
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

