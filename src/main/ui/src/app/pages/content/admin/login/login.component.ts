import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  hide = true;
  loginFormGroup: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  formStyle: {width: string; 'margin-left': string; 'margin-top': string};
  private mobileFormStyle = {width: '90%', 'margin-left': '5%', 'margin-top': '10%'};
  private desktopFormStyle = {width: '30%', 'margin-left': '30%', 'margin-top': '10%'};

  constructor(
    private fb: FormBuilder,
    private authenticationServices: AuthenticationServices,
    mobileDeviceObserver: BreakpointObserver
  ) {
    this.loginFormGroup = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
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
  ngOnInit() {}

  handleLoginErrors() {
    if (this.loginControl.hasError('required')) {
      return 'Identifiant obligatoire';
    }
    return '';
  }

  handlePasswordErrors() {
    if (this.passwordControl.hasError('required')) {
      return 'Mot de passe est obligatoire';
    }
    if (this.passwordControl.hasError('minlength')) {
      return 'Mot de passe très court';
    }
    return '';
  }

  onLogin() {
    this.authenticationServices.login();
  }
}
