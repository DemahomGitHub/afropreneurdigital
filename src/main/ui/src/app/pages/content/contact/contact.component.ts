import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServices} from '../../../services/AuthenticationServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AppServices} from '../../../services/AppServices';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  messageControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  hide = true;
  formOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  formStyle: {width: string; 'margin-top': string};
  private mobileFormStyle = {width: '100%', 'margin-top': '3%'};
  private desktopFormStyle = {width: '100%',  'margin-top': '3%'};

  constructor(
    private fb: FormBuilder,
    private mobileDeviceObserver: BreakpointObserver
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
  }

  onSubmit() {
    console.log(this.emailControl.value);
  }

  handleEmailError() {
    if (this.emailControl.hasError('required')) {
      return 'Votre email est obligatoire';
    }
    if (this.emailControl.hasError('email')) {
      return 'Format email non valide';
    }
    return '';
  }
  handleMessageError() {
    if (this.messageControl.hasError('required')) {
      return 'Le message est obligatoire';
    }
    if (this.messageControl.hasError('minLength')) {
      return 'Votre message est trop court. Dites-nous en un peu plus!';
    }
    return '';
  }
}
