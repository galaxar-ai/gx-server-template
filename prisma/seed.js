import users from './init/users.js';
import { startWorker } from '@galaxar/app';

startWorker(
    async (app) => {
        const prisma = app.getService('prisma');

        for (const user of users) {
            const { email, ..._user } = user;

            await prisma.user.upsert({
                where: { email },
                create: user,
                update: _user,
            });
        }
    },
    {
        configName: 'worker',
        logLevel: 'verbose',
    }
);
