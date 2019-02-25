import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    FirstName:new FormControl(null,Validators.required) ,
    LastName: new FormControl(null,Validators.required),
    Email: new FormControl(null, [Validators.email, Validators.required]),
    Password: new FormControl(null, Validators.required),
   Cpassword: new FormControl(null, Validators.required),

  })

  constructor() { }

  ngOnInit() {
  }

  register() {
    if(!this.registerForm.valid || (this.registerForm.controls.Password.value != this.registerForm.controls.Cpassword.value)){
      console.log("Invaled form") ;
    }else{
      console.log(this.registerForm.value)
    }
    
  }

}
