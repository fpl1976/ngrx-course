import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ThreadsService } from '../../services/threads.service';
import * as userThreadsActions from '../actions/user-threads.actions';
import { AllUserData } from 'shared/aggregates/all-user-data';
import { of } from 'rxjs';

@Injectable()
export class UserThreadsEffects {

    constructor(
        private action$: Actions,
        private threadsService: ThreadsService) { }

    @Effect()
    loadUserThreads$ = this.action$.ofType(userThreadsActions.LOAD_USER_THREADS)
        .pipe(
            switchMap(() => this.threadsService.loadUserThreads()
                .pipe(
                    map((userData: AllUserData) => new userThreadsActions.LoadUserThreadsSuccess(userData)),
                    catchError(error => of(new userThreadsActions.LoadUserThreadsFail(error)))
                ))
        );
}
