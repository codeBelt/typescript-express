import * as express from 'express';
import * as request from 'request-promise-native';

export class ApiRouter {

    constructor(router: express.Router) {
        router.get('/api/starships/', this._starShipRoute.bind(this));
    }

    protected async _starShipRoute(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        try {
            const response: request.FullResponse = await request({
                resolveWithFullResponse: true,
                url: 'https://swapi.co/api/starships/9/',
                method: 'GET',
                json: true,
            });

            res.send(response.body);
        } catch (err) {
            console.log(err.message);
            res.send(err.message);
        }
    }

}
