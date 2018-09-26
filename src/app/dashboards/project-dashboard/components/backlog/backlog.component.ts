import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'portal-dashboard-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogDashboardComponent {
  displayedColumns: string[] = ['select', 'name', 'time', 'status', 'priority'];
  logDataSource = new MatTableDataSource<Item>(ITEM_DATA);
  selection = new SelectionModel<Item>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.logDataSource.data.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.logDataSource.data.forEach(row => this.selection.select(row));
  }

}

export interface Item {
  name: string;
  time: string;
  status: string;
  priority: string;
}
const ITEM_DATA: Item[] = [
  {name: 'Styling the navigation', time: '11h', status: 'Pending', priority: 'High'},
  {name: 'JS lint', time: '3h', status: 'Pending', priority: 'Low'},
  {name: 'HTML Validation', time: '1d', status: 'Pending', priority: 'Low'}
];
