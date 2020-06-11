import { Component, OnInit } from '@angular/core';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';
import {ArticlesServices} from '../../../../services/ArticlesServices';
import {Article, Topic} from '../../../../model/Article';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-update-deletion',
  templateUrl: './article-update-deletion.component.html',
  styleUrls: ['./article-update-deletion.component.css', '../../main-content/main-content.component.css']
})
export class ArticleUpdateDeletionComponent implements OnInit {
  public allArticles: Article[];
  articleToUpdate: Article;
  titleControl = new FormControl('');
  titleChanged = false;
  contentControl = new FormControl('');
  contentChange = false;
  formOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(
    private authenticationServices: AuthenticationServices,
    private articlesServices: ArticlesServices,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.authenticationServices.switchToAdminConsole(true);
    this.allArticles = this.articlesServices.findAll();
    if (this.allArticles.length > 0) {
      this.articleToUpdate = this.allArticles[0];
    }
    this.formOptions = this.formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
    this.titleControl.valueChanges.subscribe(value => {
      this.titleChanged = true;
    });
    this.contentControl.valueChanges.subscribe(value => {
      this.contentChange = true;
    });
  }

  onSelect(id: number) {
    this.allArticles.forEach((a) => {
      if (a.id === id) {
        this.articleToUpdate = a;
      }
    });
  }

  onUpdate() {
    const newTitle = this.titleChanged ? this.titleControl.value : this.articleToUpdate.title;
    const newContent = this.contentChange ? this.contentControl.value : this.articleToUpdate.content;

    Object.assign(this.articleToUpdate, {
      id: this.articleToUpdate.id,
      title: newTitle,
      releaseDate: this.articleToUpdate.releaseDate,
      author: this.articleToUpdate.author,
      topics: this.articleToUpdate.topics,
      content: newContent
    });
    this.allArticles = this.allArticles.filter((a) => a.id !== this.articleToUpdate.id);
    this.allArticles.push(this.articleToUpdate);
  }

}
