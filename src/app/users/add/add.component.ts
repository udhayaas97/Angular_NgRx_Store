import * as userAction from './../Store/actions/userAction';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  trySubmit: boolean = false;
  Idlatest = 0;
  users;

  constructor(private fb: FormBuilder, private store: Store<any>) { }

  addUser() {
    this.trySubmit = true;
    if (this.addForm.valid) {
      this.store.dispatch(new userAction.AddUsers(this.addForm.value));
      this.addForm.reset();
      this.trySubmit = false;
      this.getID();
    }
  }


  ngOnInit(): void {
    this.addForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    })
    this.getID();

  }
  getID() {
    this.store.pipe(select('users')).subscribe(value => this.users = value.users);
    if (this.users.length > 0)
      this.Idlatest = Math.max.apply(Math, this.users.map(function (item) { return item.id; }));
    this.addForm.patchValue({
      id: this.Idlatest + 1
    });
  }

}
