import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.dialog.close(true);
  }
}
