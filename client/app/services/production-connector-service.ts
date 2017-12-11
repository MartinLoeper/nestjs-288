import { Component, Logger } from "@nestjs/common";
import { Client, ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { Observable } from "rxjs/Observable";

@Component()
export class ProductionConnectorService {
    private log: Logger;
 
    constructor() {
        this.log = new Logger(ProductionConnectorService.name);
    }

    public async getUsers() {
        const pattern = { cmd: "LIST_USERS" };
        let client = await this.getClient();

        return new Promise<any>((resolve, reject) => {
            let res = client.send<any>(pattern, {}).toPromise();
            res.then((data) => {
                resolve(data);
            }).catch(reject).then(() => {
                client.close();
            });
        });
    }

    private async getClient() {
        return ClientProxyFactory.create({ 
            transport: Transport.TCP, 
            port: 8081, 
            host: await this.retreiveCurrentHost() 
        });
    }

    // TODO: cache the ip in the future to avoid the long lasting aws api queries!
    private async retreiveCurrentHost() {
        return "localhost";
    }
}
