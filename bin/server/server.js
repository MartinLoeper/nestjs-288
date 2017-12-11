"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app/app.module");
const express = require("express");
const logger = new common_1.Logger("server");
const app = express();
const PORT = 8080;
const ADMIN_MICROSERVICE_PORT = 8081;
function bootstrap(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const nestInstance = yield core_1.NestFactory.create(app_module_1.ApplicationModule, app);
        nestInstance.listen(PORT, () => logger.log("Express server listening on port " + PORT));
        const adminMicroservice = nestInstance.connectMicroservice({
            transport: microservices_1.Transport.TCP,
            port: ADMIN_MICROSERVICE_PORT,
        });
        adminMicroservice.listen(() => logger.log("Microservice for admin console commands is listening on port " + ADMIN_MICROSERVICE_PORT + "."));
    });
}
bootstrap(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHVDQUEyQztBQUMzQyx5REFBa0Q7QUFDbEQsaURBQXFEO0FBQ3JELG1DQUFtQztBQUVuQyxNQUFNLE1BQU0sR0FBVyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7QUFFckMsbUJBQXlCLEdBQUc7O1FBQ3hCLE1BQU0sWUFBWSxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsOEJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdEUsWUFBWSxDQUFDLE1BQU0sQ0FDZixJQUFJLEVBQ0osTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEUsTUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsbUJBQW1CLENBQUM7WUFDdkQsU0FBUyxFQUFFLHlCQUFTLENBQUMsR0FBRztZQUN4QixJQUFJLEVBQUUsdUJBQXVCO1NBQ2hDLENBQUMsQ0FBQztRQUVILGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsK0RBQStELEdBQUcsdUJBQXVCLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoSixDQUFDO0NBQUE7QUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcclxuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tIFwiQG5lc3Rqcy9jb3JlXCI7XHJcbmltcG9ydCB7IFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKFwic2VydmVyXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSA4MDgwO1xyXG5jb25zdCBBRE1JTl9NSUNST1NFUlZJQ0VfUE9SVCA9IDgwODE7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBib290c3RyYXAoYXBwKSB7XHJcbiAgICBjb25zdCBuZXN0SW5zdGFuY2UgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoQXBwbGljYXRpb25Nb2R1bGUsIGFwcCk7XHJcbiAgICBuZXN0SW5zdGFuY2UubGlzdGVuKFxyXG4gICAgICAgIFBPUlQsXHJcbiAgICAgICAgKCkgPT4gbG9nZ2VyLmxvZyhcIkV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0IFwiICsgUE9SVCkpO1xyXG5cclxuICAgIGNvbnN0IGFkbWluTWljcm9zZXJ2aWNlID0gbmVzdEluc3RhbmNlLmNvbm5lY3RNaWNyb3NlcnZpY2Uoe1xyXG4gICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlRDUCxcclxuICAgICAgICBwb3J0OiBBRE1JTl9NSUNST1NFUlZJQ0VfUE9SVCxcclxuICAgIH0pO1xyXG5cclxuICAgIGFkbWluTWljcm9zZXJ2aWNlLmxpc3RlbigoKSA9PiBsb2dnZXIubG9nKFwiTWljcm9zZXJ2aWNlIGZvciBhZG1pbiBjb25zb2xlIGNvbW1hbmRzIGlzIGxpc3RlbmluZyBvbiBwb3J0IFwiICsgQURNSU5fTUlDUk9TRVJWSUNFX1BPUlQgKyBcIi5cIikpO1xyXG59XHJcblxyXG5ib290c3RyYXAoYXBwKTtcclxuXHJcbiJdfQ==