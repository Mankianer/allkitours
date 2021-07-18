import {Component, OnInit} from '@angular/core';
import {CREATE_STATUS, UserService} from "../services/users/user.service";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: string | null = null;
  usernameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(public userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  login(): void {
    if(this.usernameControl.valid && this.passwordControl.valid){
      console.log('login' + this.usernameControl.value + this.passwordControl.value)
      this.userService.createUser(this.usernameControl.value, this.passwordControl.value, (status) => {
        switch (status) {
          case CREATE_STATUS.ERROR: this.loginError = 'Some Error';
            this._snackBar.open('Failed',this.loginError);
            break;
          case CREATE_STATUS.ALREADY_CREATED: this.loginError = 'Allready Logged In'
            this._snackBar.open('Failed',this.loginError);
            break;
          default:
        }
      })
    }
  }

  logout(): void {
    this.userService.logout();
  }

}
