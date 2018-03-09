import * as express from 'express';

export class TestRouter {

    constructor(router: express.Router) {
        router.get('/test', this._testRoute.bind(this));
    }

    protected _testRoute(request: express.Request, response: express.Response, next: express.NextFunction): void {
        response.send('OK');
    }

}
