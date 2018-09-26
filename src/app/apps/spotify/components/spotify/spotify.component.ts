import { Observable } from 'rxjs/Observable';
import { debounceTime, filter, distinct, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent {
  spotifyToken: string = sessionStorage.getItem('spotify-token');
  searchTerm: string;
  searchResults$: Observable<SearchResults>;
  searchTerm$: Subject<string> = new Subject();

  constructor(private http: HttpClient) {
    this.searchResults$ = this.searchTerm$
      .pipe(
        debounceTime(500),
        filter(searchTerm => !!searchTerm),
        distinct(),
        switchMap(searchTerm =>
          this.http.get<SearchResults>('https://api.spotify.com/v1/search', {
            headers: {
              'Authorization': 'Bearer ' + this.spotifyToken
            },
            params: {
              q: searchTerm,
              type: 'album'
            }
          })
        )
      );
  }

  searchTermChange(searchTerm: string): void {
    this.searchTerm$.next(searchTerm);
  }

  play(album: Album): void {
    this.http.put('https://api.spotify.com/v1/me/player/play',
    {
      context_uri: 'spotify:album:' + album.id
    },
    {
      headers: {
        'Authorization': 'Bearer ' + this.spotifyToken
      }
    })
      .subscribe();
  }
}
interface SearchResults {
  items: Album[];
}

interface Album {
  id: string;
  name: string;
  type: string;
  images: any[];
}
