import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface Filter {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', '../main-content/main-content.component.css']
})
export class ArticlesComponent implements OnInit {

  dateFilterControl = new FormControl();
  dateFilter: Filter[] = [
      {value: 'bulbasaur-0', viewValue: 'Les plus récents d\'abord'},
      {value: 'oddish-1', viewValue: 'Les plus anciens d\'abord'}
  ];

  topicFilterControl = new FormControl();
  topicFilter: Filter[] = [
    {value: 'squirtle-3', viewValue: 'Education'},
    {value: 'psyduck-4', viewValue: 'Santé'},
    {value: 'psyduck-5', viewValue: 'Agriculture'},
    {value: 'psyduck-6', viewValue: 'Fintech'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
