import { Application, Request, Response } from 'express';

import * as _ from 'lodash';

import { dbMessages, dbParticipants } from '../db-data';
import { Message } from '../../../shared/model/message';
import { AllUserData } from '../../../shared/aggregates/all-user-data';
import { findDbThreadsPerUser } from '../persistence/findThreadsPerUser';

export function apiGetUserThreads(app: Application) {

    app.route('/api/threads').get((req: Request, res: Response) => {

        const participantId = 1;
        const threadsPerUser = findDbThreadsPerUser(participantId);

        let messages: Message[] = [];
        let participantIds: string[] = [];

        threadsPerUser.forEach(thread => {
            const threadMessages: Message[] = _.filter(dbMessages, (message: any) => message.threadId === thread.id);
            messages = [...messages, ...threadMessages];
            participantIds = [...participantIds, ...(_.keys(thread.participants))];
        });

        const participants = _.uniq(participantIds.map(pid => dbParticipants[pid]));

        const response: AllUserData = {
            participants,
            messages,
            threads: threadsPerUser
        };

        res.status(200).json(response);

    });

}
