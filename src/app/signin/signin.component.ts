import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email:  new FormControl(null,[Validators.email, Validators.required]),
    password : new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  login() {
    if(!this.loginForm.valid){
      alert("not valied email or password")
    }else{
      alert("logged in successfuly")
    }
  }

}
