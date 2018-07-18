import * as _ from 'lodash';

import * as fromUserThreads from '../actions/user-threads.actions';
import { StoreData, INITIAL_STORE_DATA } from '../store-data';

export function reducer(state: StoreData = INITIAL_STORE_DATA, action: fromUserThreads.UserThreadsAction): StoreData {

    switch (action.type) {

        case fromUserThreads.LOAD_USER_THREADS:
            return { ...state, loading: true };

        case fromUserThreads.LOAD_USER_THREADS_SUCCESS:
            const userData = (<fromUserThreads.LoadUserThreadsSuccess>action).payload;

            const participants = _.keyBy(userData.participants, 'id');
            const messages = _.keyBy(userData.messages, 'id');
            const threads = _.keyBy(userData.threads, 'id');

            return {
                ...state,
                participants,
                messages,
                threads,
                loading: false,
                loaded: true
            };

        case fromUserThreads.LOAD_USER_THREADS_FAIL:
            return { ...state, loaded: false, loading: false };

    }

    return state;

}
