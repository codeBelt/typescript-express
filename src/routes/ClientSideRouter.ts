import * as express from 'express';

export class ClientSideRouter {

    constructor(router: express.Router) {
        router.get('/', this._homeRoute.bind(this));
    }

    protected _homeRoute(request: express.Request, response: express.Response, next: express.NextFunction): void {
        const data = {
            title: 'Express + Nunjucks Demo App',
            message: 'Simple app showing how to setup nunjucks for an express.js app.'
        };

        // render page with nunjucks
        // INFO: See views/layout.html and views/index.html for templates
        response.render('index', data);
    }

}
