import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-popup',
  template: `
    <h1 mat-dialog-title>Dialog Popup</h1>
    <div mat-dialog-content>
      <p>Hello stranger, stay a while and listen</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Ok</button>
    </div>
  `
})
export class DialogPopupTopComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPopupTopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPopupTopComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
