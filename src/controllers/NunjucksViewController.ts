import * as express from 'express';
import * as nunjucks from 'nunjucks';
import * as path from 'path';
import {VzWebServerEnum} from '../constants/VzWebServerEnum';

export class NunjucksViewController {

    constructor(app: express.Application) {
        const rootDirectory: string = app.get(VzWebServerEnum.RootDirectory);
        const viewsDirectory: string = path.join(rootDirectory, './views');

        const nunjucksEnv: nunjucks.Environment = nunjucks.configure(viewsDirectory, {
            autoescape: true,
            express: app,
            watch: true,
            // filters
        });

        nunjucksEnv.addFilter('log', console.log);

        app.set('view engine', 'html');
        app.engine('html', nunjucks.render);
    }

}
