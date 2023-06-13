/**
 * Module dependencies.
 */

import WebServer from '@galaxar/server';
import { esmIsMain } from '@galaxar/utils';
import pkg from '../package.json';

const createServer = (name, opts) => {
    return new WebServer(name, opts);
};

if (esmIsMain() || require.main === module) {
    const webServer = createServer(pkg.name, {
        //logLevel: 'verbose',
        sourcePath: process.env.SVR_SRC_PATH ?? 'server',
    });

    webServer
        .start_()
        .catch((error) => {
            console.error(error);
        });
}

export default createServer;
