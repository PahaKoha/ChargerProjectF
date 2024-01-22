import{Component, OnInit} from '@angular/core';
import {AuthService} from "../../Services/authService";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  constructor(public authService: AuthService, public fb: FormBuilder) {
  }

  loginForm!: FormGroup;
  signUpForm!: FormGroup;

  loginEmail: string = "";
  signUpEmail: string = "";

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.signUpForm = this.fb.group({
      nickname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  openLogin() {
    this.authService.showLogin()
  }

  openSignUp() {
    this.authService.showSingUp()
  }

  closeLogin() {
    this.authService.hideLogin();
  }

  loginIsOpen() {
    return this.authService.loginIsShown()
  }

  closeSignUp() {
    this.authService.hideSignUp()
  }

  signUpIsOpen() {
    return this.authService.signUpIsShown()
  }

  emailChecker(email: string) {
    this.authService.emailChecker(email);
  }


  protected readonly require = require;
}
