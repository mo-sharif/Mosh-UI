import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { map, publishReplay, refCount } from 'rxjs/operators';

declare var hljs: any;

@Component({
  selector: 'example-with-code',
  templateUrl: './example-with-code.component.html',
  styleUrls: ['./example-with-code.component.scss']
})
export class ExampleWithCodeComponent implements OnInit {
  @Input() title: string;
  @Input() example: string;
  @Input() tabs: string[] = ['html', 'ts', 'scss'];

  showCode: Boolean = false;
  html$: Observable<string>;

  codeTabs: Array<{ title: string, code$: Observable<string> }> = [];

  constructor(private http: Http) {}

  ngOnInit(): void {
    this.tabs.forEach(tab => {
      this.codeTabs.push({
        title: tab,
        code$: this.http.get(`assets/examples/${this.example}/${this.example}.component.${tab}`)
          .pipe(
            map((response: Response) => response.text()),
            map((text: String) => hljs.highlightAuto(text)),
            map((hl: any) => hl.value),
            publishReplay(1),
            refCount()
          )
      });
    });
  }

  toggleCode(): void {
    this.showCode = !this.showCode;
  }
}
