import * as userAction from './../Store/actions/userAction';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];

  constructor(private store: Store<any>, private router: Router) {
    // this.store.dispatch(new userAction.FetchUsers());
    this.store.pipe(select('users')).subscribe(value => this.users = value.users);
  }
  updateUser(id: number) {
    this.router.navigate(["/update", id]);
  }
  deleteUser(id: number) {
    const deleteUser = { delete_id: Number(id)}
    this.store.dispatch(new userAction.DeleteUsers(deleteUser));
  }
  ngOnInit() {

  }

}
