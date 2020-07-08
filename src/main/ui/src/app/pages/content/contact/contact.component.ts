import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {AppServices} from '../../../services/AppServices';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../app.component.css']
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

  constructor(private fb: FormBuilder, private appServices: AppServices) {
    this.formOptions = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
    appServices
      .observerMobileDevices()
      .subscribe(results => {
        this.formStyle = results.matches ? this.mobileFormStyle : this.desktopFormStyle;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.emailControl.value);
  }

  handleEmailError() {
    if (this.emailControl.hasError('required')) {
      return 'Email obligatoire';
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
