import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {log} from 'util';
import {Router} from '@angular/router';
import {AppServices} from '../../../../services/AppServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(10)]);
  hide = true;
  formOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  formStyle: {width: string; 'margin-left': string; 'margin-top': string};
  connected = false;
  connectionResponse = '';
  private mobileFormStyle = {width: '90%', 'margin-left': '5%', 'margin-top': '10%'};
  private desktopFormStyle = {width: '30%', 'margin-left': '30%', 'margin-top': '10%'};

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
          this.appServices.switchToAdminMenu(true);
        } else {
          this.formStyle = this.desktopFormStyle;
        }
      });
  }
  ngOnInit() {
    this.authenticationServices.switchToAdminConsole(true);
  }

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

  onSubmit() {
    const login = this.loginControl.value;
    const password = this.passwordControl.value;

    if (!this.loginControl.invalid && !this.passwordControl.invalid) {
      const response = this.authenticationServices.login(login, password);
      if (response.ok) {
        this.connected = true;
        this.connectionResponse = response.message;
        this.router
          .navigate(['/admin', 'new-article'])
          .then(res => {
            console.log('Navigation succeed: ' + res);
          })
          .catch(err => {
            console.log('Navigation failed: ' + err);
          });
      } else {
        this.connected = false;
        this.connectionResponse = response.message;
      }
    }
  }
}
