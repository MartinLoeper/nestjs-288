import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { Transport } from '@nestjs/microservices';
import { ApplicationModule } from "./app/app.module";
import * as express from "express";

const logger: Logger = new Logger("server");
const app = express();
const PORT = 8085;

async function bootstrap(app) {
    const nestInstance = await NestFactory.create(ApplicationModule, app);
    nestInstance.listen(
        PORT,
        () => logger.log("Express server listening on port " + PORT));
}

bootstrap(app);

