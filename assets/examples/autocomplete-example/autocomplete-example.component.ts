import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

export class Country {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'example-autocomplete',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss']
})
export class AutocompleteExampleComponent implements OnInit {
  countryCtrl: FormControl;
  filteredCountries: Observable<any[]>;

  countries: Country[] = [{
      name: 'Greece',
      population: '10.7M',
      flag: 'assets/images/examples/autocomplete/Flag_of_Greece.svg'
    }, {
      name: 'Argetina',
      population: '44.07M',
      flag: 'assets/images/examples/autocomplete/Flag_of_Argentina.svg'
    }, {
      name: 'Australia',
      population: '24.73M',
      flag: 'assets/images/examples/autocomplete/Flag_of_Australia.svg'
    }, {
      name: 'Belgium',
      population: '11.37M',
      flag: 'assets/images/examples/autocomplete/Belgium_Flag.svg'
    }, {
      name: 'United States',
      population: '326.185M',
      flag: 'assets/images/examples/autocomplete/Flag_of_the_United_States.svg'
    }, {
      name: 'Canada',
      population: '36.73M',
      flag: 'assets/images/examples/autocomplete/Flag_of_Canada.svg'
    }, {
      name: 'United Kingdom',
      population: '65.64M',
      flag: 'assets/images/examples/autocomplete/Flag_of_the_United_Kingdom.svg'
  }];

  constructor() {
    this.countryCtrl = new FormControl();
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterCountries(state) : this.countries.slice())
      );
  }

  filterCountries (name: string): Country[]  {
    return this.countries.filter(country =>
      country.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngOnInit(): void {
  }

}
