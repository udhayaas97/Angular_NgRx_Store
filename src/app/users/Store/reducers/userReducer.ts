import { ActionTypes, userAction } from './../actions/userAction';

const initialState = {
  users: []
}

export function userReducer(state = initialState, action: userAction) {

  switch (action.type) {

    case ActionTypes.FETCH_USERS:
      return state;

    case ActionTypes.ADD_USERS:
      return { users: [...state.users, action.data] }

    case ActionTypes.UPDATE_USERS:
      const updated_Data = state.users.map(user => {
        if (user.id === action.updatedData.id_to_update) {
          return { ...user, ...action.updatedData.updateFormDate }
        } else {
          return user;
        }
      });
      return { users: updated_Data }

    case ActionTypes.DELETE_USERS:
      const deletedData = state.users.filter(user => user.id !== action.DeletePayload.delete_id);
      return { users: deletedData };

    default:
      return state;
  }
}
