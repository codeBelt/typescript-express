import * as express from 'express';

export class TestRouter {

    constructor(router: express.Router) {
        this._testRoute(router);
    }

    protected _testRoute(router: express.Router): void {
        router.get('/test', (request: express.Request, response: express.Response, next: express.NextFunction) => {
            response.send('OK');
        });
    }

}
