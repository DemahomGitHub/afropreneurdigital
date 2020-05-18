import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Filter {
  value: string;
  viewValue: string;
}

interface FilterGroup {
  disabled?: boolean;
  name: string;
  pokemon: Filter[];
}


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
})
export class ArticlesComponent implements OnInit {

  filterControl = new FormControl();
  filterGroups: FilterGroup[] = [
    {
      name: 'Par date de publication',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Les plus récents en premier'},
        {value: 'oddish-1', viewValue: 'Les plus ancients en premier'},
      ]
    },
    {
      name: 'Par thématique',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Education'},
        {value: 'psyduck-4', viewValue: 'Santé'},
        {value: 'psyduck-5', viewValue: 'Agriculture'},
        {value: 'psyduck-6', viewValue: 'Fintech'}
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
