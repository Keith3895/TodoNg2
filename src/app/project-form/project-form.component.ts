import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {Project} from '../project';
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectFormComponent implements OnInit {

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

  ngOnInit() {
    this.myForm = this._fb.group({
      name: [''],
      DueDate:[''],
      done:[''],
  });
  }

}
