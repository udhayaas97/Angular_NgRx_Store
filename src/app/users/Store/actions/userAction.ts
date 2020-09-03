import { Action } from '@ngrx/store';

export enum ActionTypes {
  FETCH_USERS = "Fetch User",
  ADD_USERS = "Add User",
  UPDATE_USERS = "Update User",
  DELETE_USERS = "Delete User"
}


export class FetchUsers implements Action {
  readonly type = ActionTypes.FETCH_USERS;
}

export class AddUsers implements Action {
  readonly type = ActionTypes.ADD_USERS;
  constructor(public data: any) {}
}
export class UpdateUsers implements Action {
  readonly type = ActionTypes.UPDATE_USERS;
  constructor(public updatedData: any) {}
}

export class DeleteUsers implements Action {
  readonly type = ActionTypes.DELETE_USERS;
  constructor(public DeletePayload: any) {}
}
export type userAction = FetchUsers | AddUsers | UpdateUsers | DeleteUsers;
