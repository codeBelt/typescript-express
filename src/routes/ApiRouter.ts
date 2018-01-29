import * as express from 'express';

export class ApiRouter {

    constructor(router: express.Router) {
        this._userRoute(router);
        this._personRoute(router);
    }

    protected _userRoute(router: express.Router): void {
        router.get('/api/user/:id', (request: express.Request, response: express.Response, next: express.NextFunction) => {
            response.send('OK');
        });
    }

    protected _personRoute(router: express.Router): void {
        router.get('/api/person/:id', (request: express.Request, response: express.Response, next: express.NextFunction) => {
            response.send('OK');
        });
    }

}
