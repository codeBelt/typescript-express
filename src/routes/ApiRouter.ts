import * as express from 'express';

export class ApiRouter {

    constructor(router: express.Router) {
        router.get('/api/user/:id', this._userRoute.bind(this));
        router.get('/api/person/:id', this._personRoute.bind(this));
    }

    protected _userRoute(request: express.Request, response: express.Response, next: express.NextFunction): void {
        response.send('OK User');
    }

    protected _personRoute(request: express.Request, response: express.Response, next: express.NextFunction): void {
        response.send('OK Person');
    }

}
