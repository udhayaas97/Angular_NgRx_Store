import * as  userAction from './../Store/actions/userAction';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  selectedUser: any;
  trySubmit: boolean = false;

  updateForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required]
  })
  constructor(private router: ActivatedRoute, private store: Store<any>, private fb: FormBuilder, private route: Router) {
    // this.id = parseInt(this.router.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => this.id = params.id);
    this.store.pipe(select('users')).subscribe(value => {//select will return the values of key'user' from store
      const users = value.users;
      this.selectedUser = users.find(user => user.id === Number(this.id));
    });

    this.updateForm.setValue({
      id: this.selectedUser.id,
      name: this.selectedUser.name
    });


  }
  updateUser() {
    this.trySubmit = true;
    if (this.updateForm.valid) {
      const uservalue = { id_to_update: Number(this.id), updateFormDate: this.updateForm.value }
      this.store.dispatch(new userAction.UpdateUsers(uservalue));
      this.route.navigate(['../'])
    }
  }

}
