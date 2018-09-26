import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectLanguage(lang: string): void {
    if (null === lang) {
      localStorage.removeItem('portal-material-locale');
    } else {
      localStorage.setItem('portal-material-locale', lang);
    }
    location.reload(true);
  }
}
