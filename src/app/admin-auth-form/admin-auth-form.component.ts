import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-auth-form',
  templateUrl: './admin-auth-form.component.html',
  styleUrls: ['./admin-auth-form.component.css']
})
export class AdminAuthFormComponent {

  adminAuthForm = {
    loginInput: 'root',
    passwordInput: ''
  };

  logInputState(inputOne: any, inputTwo): void {
    console.log(inputOne, inputTwo);
  }

  logFormState(form: NgForm): void {
    console.log(form);
  }

}
