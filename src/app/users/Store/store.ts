import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { userReducer } from './reducers/userReducer';

export const FEATURE_NAME = 'AngularCRUD';

const STORE_KEYS_TO_PERSIST = ['users'];

export interface StoreState {
  users: any;
}

export const reducers: ActionReducerMap<StoreState> = {
  users: userReducer
};
export const getStoreState = createFeatureSelector<StoreState>(FEATURE_NAME);

export function localStorageSyncReducer(reducer: ActionReducer<StoreState>): ActionReducer<StoreState> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<StoreState, Action>> = [localStorageSyncReducer];
