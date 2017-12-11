import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from '@nestjs/microservices';
import { ApplicationModule } from "./app/app.module";
import * as express from "express";

const logger: Logger = new Logger("server");
const app = express();
const PORT = 8080;
const ADMIN_MICROSERVICE_PORT = 8081;

async function bootstrap(app) {
    const nestInstance = await NestFactory.create(ApplicationModule, app);
    nestInstance.listen(
        PORT,
        () => logger.log("Express server listening on port " + PORT));

    const adminMicroservice = nestInstance.connectMicroservice({
        transport: Transport.TCP,
        port: ADMIN_MICROSERVICE_PORT,
    });

    adminMicroservice.listen(() => logger.log("Microservice for admin console commands is listening on port " + ADMIN_MICROSERVICE_PORT + "."));
}

bootstrap(app);

