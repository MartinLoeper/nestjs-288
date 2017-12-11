import { MainController } from './controllers/main.controller';
import { Module } from "@nestjs/common";

@Module({
  components: [

  ],
  controllers: [
    MainController
  ],
  exports: [],
})

export class ApplicationModule {}