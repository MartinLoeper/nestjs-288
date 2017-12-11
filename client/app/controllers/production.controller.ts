import { ProductionConnectorService } from './../services/production-connector-service';
import { Body, Controller, Get, Head, HttpStatus, Logger, Post, Request, Response, UseGuards, UsePipes } from "@nestjs/common";;

@Controller()
export class ProductionController {

    constructor(private readonly prodConnectorService: ProductionConnectorService) { }    

    @Get("/users")
    public async getUsers( @Request() req: Request) {
        let promise = this.prodConnectorService.getUsers();

        return new Promise((resolve, reject) => {

            const TIMEOUT = 20000;
            setTimeout(() => {
                reject(new Error("Request timed out after 20s."));
            }, TIMEOUT);

            promise.then(resolve).catch((err) => {
                reject(new Error(err));
            });
        });
    }
}
