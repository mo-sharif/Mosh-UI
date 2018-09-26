import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'chips-example-2',
  templateUrl: './chips-example-2.component.html',
  styleUrls: ['./chips-example-2.component.scss']
})
export class ChipsExample2Component implements OnInit {
  visible: boolean;
  selectable: boolean;
  removable: boolean;
  addOnBlur: boolean;
  separatorKeysCodes: any[];
  tasks: any[];

  constructor() {
    this.visible = true;
    this.selectable = true;
    this.removable = true;
    this.addOnBlur = true;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.tasks = [
      { name: 'Clean' },
      { name: 'Laundry' },
      { name: 'Meditation' }
    ];
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tasks.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(task: any): void {
    const index = this.tasks.indexOf(task);

    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

}
