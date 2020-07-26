import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServices} from '../../../../services/AuthenticationServices';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AppServices} from '../../../../services/AppServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../../app.component.css']
})
export class LoginComponent implements OnInit {
  loginControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(1)]);
  hide = true;
  formOptions: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  formStyle: {width: string; 'margin-left': string; 'margin-top': string};
  connected = false;
  connectionResponse = '';
  private mobileFormStyle = {width: '90%', 'margin-left': '5%', 'margin-top': '10%'};
  private desktopFormStyle = {width: '45%', 'margin-left': '30%', 'margin-top': '10%'};

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
    // this.authenticationServices.switchToAdminConsole(this.authenticationServices.connected());
    if (this.authenticationServices.connected()) {
      this.appServices.enableAdminConsole(true);
      this.router
          .navigate(['/admin/articles/add'])
          .then(ok => {
            if (ok) {
              console.log('Redirecting to admin console');
            } else {
              console.log('Redirecting to login page');
            }
          })
         .catch(err => {
           console.log('Something went wrong.', err);
         });
    }
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
      this.authenticationServices
        .login(login, password)
        .subscribe(response => {
          if (response.status === 'OK') {
            this.authenticationServices.saveUserSession(response.data);
            this.router
              .navigate(['/admin/articles/add'])
              .then(ok => {
                console.log('Redirecting to admin console');
                if (ok) {
                  this.appServices.enableAdminConsole(ok);
                } else {
                  console.log('Unable to open the admin console');
                }
              })
              .catch(err => {
                console.log('Something went wrong: ' + err);
              });
          }
          this.connected = this.authenticationServices.connected();
          this.connectionResponse = response.message;
        });
    }
  }
}
