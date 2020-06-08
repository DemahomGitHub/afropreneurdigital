import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AppServices} from '../../../../services/AppServices';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css', '../../main-content/main-content.component.css']
})
export class ArticleCreationComponent implements OnInit {
  titleControl = new FormControl('', [Validators.required]);
  contentControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  formOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  formStyle: {width: string; 'margin-left': string; 'margin-top': string};
  connected = false;
  connectionResponse = '';
  private mobileFormStyle = {width: '90%', 'margin-left': '5%', 'margin-top': '2%'};
  private desktopFormStyle = {width: '80%', 'margin-left': '10%', 'margin-top': '2%'};

  constructor(
    private fb: FormBuilder,
    private authenticationServices: AuthenticationServices,
    private mobileDeviceObserver: BreakpointObserver,
    private router: Router,
    private appServices: AppServices
  ) {
    this.formOptions = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
    mobileDeviceObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.WebPortrait])
      .subscribe(results => {
        if (results.matches) {
          this.formStyle = this.mobileFormStyle;
        } else {
          this.formStyle = this.desktopFormStyle;
        }
      });
  }
  ngOnInit() {
    this.authenticationServices.switchToAdminConsole(true);
  }

  handleLoginErrors() {
    if (this.titleControl.hasError('required')) {
      return 'Le titre est obligatoire';
    }
    return '';
  }

  handlePasswordErrors() {
    if (this.contentControl.hasError('required')) {
      return 'Contenu obligatoire';
    }
    return '';
  }

  onSubmit() {
    const title = this.titleControl.value;
    const content = this.contentControl.value;

    console.log(title);
    console.log(content);
  }

}
