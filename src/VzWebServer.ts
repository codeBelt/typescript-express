import * as express from 'express';
// import * as favicon from 'serve-favicon';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as http from "http";
import * as logger from 'morgan';
import * as path from 'path';
import {ApiRouter} from './routes/ApiRouter';
import {NunjucksViewController} from './controllers/NunjucksViewController';
import {VzWebServerEnum} from './constants/VzWebServerEnum';
import {ClientSideRouter} from './routes/ClientSideRouter';

export class VzWebServer {

    protected _app: express.Application = express();
    protected _router: express.Router = express.Router();

    constructor() {
        this._app.set(VzWebServerEnum.RootDirectory, __dirname);
    }

    public get app(): express.Application {
        return this._app;
    }

    public registerController(Controller: any): void {
        new Controller(this._app);
    }

    public registerRouter(Router: any): void {
        new Router(this._router);
    }

    public startServer(): void {
        this._setupServer();

        const server: http.Server = this._app.listen(3000, () => {
            const port = server.address().port;

            console.log('Example app listening at http://%s:%s', 'localhost', port);
        });
    }

    protected _setupServer(): void {
        const rootDirectory: string = this._app.get(VzWebServerEnum.RootDirectory);

        this.registerController(NunjucksViewController);

        this.registerRouter(ApiRouter);
        this.registerRouter(ClientSideRouter);

        this._app.use(logger('dev'));
        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({extended: false}));
        this._app.use(cookieParser());
        this._app.use(express.static(path.join(rootDirectory, './public')));
        this._app.use(this._router);
    }

}
