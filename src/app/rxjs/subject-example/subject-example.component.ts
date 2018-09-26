import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { switchMap, debounceTime, filter, distinct } from 'rxjs/operators';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.scss']
})
export class SubjectExampleComponent {
  searchTerm: string;
  results$: Observable<GitHubResults>;
  latestSearch$: Subject<string> = new Subject();

  constructor(private http: HttpClient, http2: Http) {
    this.results$ = this.latestSearch$
      .pipe(
        debounceTime(500),
        filter(searchTerm => !!searchTerm),
        distinct(),
        switchMap(searchTerm =>
          this.http.get<GitHubResults>(`https://api.github.com/search/repositories?q=${searchTerm}`)
        )
      );
  }

  searchTermChanged(searchTerm: string): void {
    this.latestSearch$.next(searchTerm);
  }
}

interface GitHubResults {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}
