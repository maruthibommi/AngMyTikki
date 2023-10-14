import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }
  onSubmit() {

    if(this.loginForm.valid){
      console.log('submitted data:', this.loginForm.value);
    }
  }
}
