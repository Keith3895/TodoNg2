import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  firstName = new FormControl("", Validators.required);
  constructor(fb: FormBuilder) {
      this.form = fb.group({
          "firstName": this.firstName,
          "password":["", Validators.required]
      });
  }
  onSubmitModelBased() {
      console.log("model-based form submitted");
      console.log(this.form);
  }

  ngOnInit() {
  }

}
