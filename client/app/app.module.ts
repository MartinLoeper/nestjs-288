import { ProductionConnectorService } from './services/production-connector-service';
import { ProductionController } from './controllers/production.controller';
import { Module } from "@nestjs/common";

@Module({
  components: [
    ProductionConnectorService
  ],
  controllers: [
    ProductionController
  ],
  exports: [],
})

export class ApplicationModule {}