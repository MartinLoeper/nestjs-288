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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsdUNBQTJDO0FBQzNDLHlEQUFrRDtBQUNsRCxpREFBcUQ7QUFDckQsbUNBQW1DO0FBRW5DLE1BQU0sTUFBTSxHQUFXLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQztBQUVyQyxtQkFBeUIsR0FBRzs7UUFDeEIsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyw4QkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RSxZQUFZLENBQUMsTUFBTSxDQUNmLElBQUksRUFDSixNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztZQUN2RCxTQUFTLEVBQUUseUJBQVMsQ0FBQyxHQUFHO1lBQ3hCLElBQUksRUFBRSx1QkFBdUI7U0FDaEMsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQywrREFBK0QsR0FBRyx1QkFBdUIsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hKLENBQUM7Q0FBQTtBQUVELFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gXCJAbmVzdGpzL2NvcmVcIjtcclxuaW1wb3J0IHsgVHJhbnNwb3J0IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Nb2R1bGUgfSBmcm9tIFwiLi9hcHAvYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcblxyXG5jb25zdCBsb2dnZXI6IExvZ2dlciA9IG5ldyBMb2dnZXIoXCJzZXJ2ZXJcIik7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuY29uc3QgUE9SVCA9IDgwODA7XHJcbmNvbnN0IEFETUlOX01JQ1JPU0VSVklDRV9QT1JUID0gODA4MTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcChhcHApIHtcclxuICAgIGNvbnN0IG5lc3RJbnN0YW5jZSA9IGF3YWl0IE5lc3RGYWN0b3J5LmNyZWF0ZShBcHBsaWNhdGlvbk1vZHVsZSwgYXBwKTtcclxuICAgIG5lc3RJbnN0YW5jZS5saXN0ZW4oXHJcbiAgICAgICAgUE9SVCxcclxuICAgICAgICAoKSA9PiBsb2dnZXIubG9nKFwiRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgXCIgKyBQT1JUKSk7XHJcblxyXG4gICAgY29uc3QgYWRtaW5NaWNyb3NlcnZpY2UgPSBuZXN0SW5zdGFuY2UuY29ubmVjdE1pY3Jvc2VydmljZSh7XHJcbiAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuVENQLFxyXG4gICAgICAgIHBvcnQ6IEFETUlOX01JQ1JPU0VSVklDRV9QT1JULFxyXG4gICAgfSk7XHJcblxyXG4gICAgYWRtaW5NaWNyb3NlcnZpY2UubGlzdGVuKCgpID0+IGxvZ2dlci5sb2coXCJNaWNyb3NlcnZpY2UgZm9yIGFkbWluIGNvbnNvbGUgY29tbWFuZHMgaXMgbGlzdGVuaW5nIG9uIHBvcnQgXCIgKyBBRE1JTl9NSUNST1NFUlZJQ0VfUE9SVCArIFwiLlwiKSk7XHJcbn1cclxuXHJcbmJvb3RzdHJhcChhcHApO1xyXG5cclxuIl19