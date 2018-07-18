import { Action } from '@ngrx/store';
import { AllUserData } from 'shared/aggregates/all-user-data';

// Load user threads
export const LOAD_USER_THREADS = 'Load User Threads';
export const LOAD_USER_THREADS_FAIL = 'Load User Threads Fail';
export const LOAD_USER_THREADS_SUCCESS = 'Load User Threads Success';

export class LoadUserThreads implements Action {
    readonly type: string = LOAD_USER_THREADS;
}

export class LoadUserThreadsFail implements Action {
    readonly type: string = LOAD_USER_THREADS_FAIL;
    constructor(public payload: any) { }
}

export class LoadUserThreadsSuccess implements Action {
    readonly type: string = LOAD_USER_THREADS_SUCCESS;
    constructor(public payload: AllUserData) { }
}

export type UserThreadsAction =
    LoadUserThreads |
    LoadUserThreadsFail |
    LoadUserThreadsSuccess;
