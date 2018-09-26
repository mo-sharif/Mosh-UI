import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'icon-example-2',
  templateUrl: './icon-example-2.component.html',
  styleUrls: ['./icon-example-2.component.scss']
})
export class IconExample2Component implements OnInit {
  icons: Observable<string[]>;
  color: String = '';
  constructor(private http: HttpClient) {
    this.icons = this.http.get<string[]>('assets/data/examples/fa-icons.json');
  }

  ngOnInit(): void {
  }

}
