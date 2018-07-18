import { ActionReducerMap } from '@ngrx/store';

import { StoreData } from '../store-data';
import { UiState } from '../ui-state';

import * as fromUserThreads from './user-threads.reducer';

export interface ApplicationState {
    uiState: UiState;
    storeData: StoreData;
}

export const reducers: ActionReducerMap<ApplicationState> = {
    storeData: fromUserThreads.reducer,
    uiState: null
};
