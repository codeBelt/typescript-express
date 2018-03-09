import * as express from 'express';
import * as request from 'request-promise-native';

export class ApiRouter {

    constructor(router: express.Router) {
        router.get('/api/starships/', this._starShipRoute.bind(this));
    }

    protected async _starShipRoute(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        try {
            const response: request.RequestPromise = await request({
                url: 'https://swapi.co/api/starships/9/',
                method: 'GET',
            });

            res.send(response);
        } catch (err) {
            console.log(err);
        }
    }

}
