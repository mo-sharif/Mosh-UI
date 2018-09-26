import { Message } from './models/message';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Thread } from './models/thread';

@Injectable()
export class EmailService {
  private _list: Subject<string> = new Subject();
  private _id: Subject<string> = new Subject();
  private _threads: BehaviorSubject<Thread[]> = new BehaviorSubject(null);
  private _currentThread: BehaviorSubject<Thread> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this._list
      .pipe(
        switchMap(listName => this.http.get<Thread[]>(`assets/data/apps/email/${listName}.json`))
      )
      .subscribe(threads => this._threads.next(threads));

    combineLatest(this._threads, this._id)
      .subscribe(results => {
        const threads = results[0];
        const id = results[1];
        if (null !== threads) {
          this._currentThread.next(
            threads.find(thread => thread.id === id)
          );
        }
      });
  }

  threads(): Observable<Thread[]> {
    return this._threads.asObservable();
  }

  currentThread(): Observable<Thread> {
    return this._currentThread.asObservable();
  }

  loadThreadList(name: string): void {
    this._list.next(name);
  }

  loadThread(id: string): void {
    this._id.next(id);
  }

  addThread(thread: Thread): void {
    const threads: Thread[] = this._threads.getValue();
    threads.unshift(thread);
    this._threads.next(threads);
  }
}
