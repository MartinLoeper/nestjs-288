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
const app_module_1 = require("./app/app.module");
const express = require("express");
const logger = new common_1.Logger("server");
const app = express();
const PORT = 8085;
function bootstrap(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const nestInstance = yield core_1.NestFactory.create(app_module_1.ApplicationModule, app);
        nestInstance.listen(PORT, () => logger.log("Express server listening on port " + PORT));
    });
}
bootstrap(app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2xpZW50L2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHVDQUEyQztBQUUzQyxpREFBcUQ7QUFDckQsbUNBQW1DO0FBRW5DLE1BQU0sTUFBTSxHQUFXLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUVsQixtQkFBeUIsR0FBRzs7UUFDeEIsTUFBTSxZQUFZLEdBQUcsTUFBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyw4QkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0RSxZQUFZLENBQUMsTUFBTSxDQUNmLElBQUksRUFDSixNQUFNLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQUE7QUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcclxuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tIFwiQG5lc3Rqcy9jb3JlXCI7XHJcbmltcG9ydCB7IFRyYW5zcG9ydCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKFwic2VydmVyXCIpO1xyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSA4MDg1O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKGFwcCkge1xyXG4gICAgY29uc3QgbmVzdEluc3RhbmNlID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlKEFwcGxpY2F0aW9uTW9kdWxlLCBhcHApO1xyXG4gICAgbmVzdEluc3RhbmNlLmxpc3RlbihcclxuICAgICAgICBQT1JULFxyXG4gICAgICAgICgpID0+IGxvZ2dlci5sb2coXCJFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCBcIiArIFBPUlQpKTtcclxufVxyXG5cclxuYm9vdHN0cmFwKGFwcCk7XHJcblxyXG4iXX0=