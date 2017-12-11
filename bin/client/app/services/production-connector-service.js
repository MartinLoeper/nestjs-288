"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const microservices_1 = require("@nestjs/microservices");
let ProductionConnectorService = ProductionConnectorService_1 = class ProductionConnectorService {
    constructor() {
        this.log = new common_1.Logger(ProductionConnectorService_1.name);
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const pattern = { cmd: "LIST_USERS" };
            let client = yield this.getClient();
            return new Promise((resolve, reject) => {
                let res = client.send(pattern, {}).toPromise();
                res.then((data) => {
                    resolve(data);
                }).catch(reject).then(() => {
                    client.close();
                });
            });
        });
    }
    getClient() {
        return __awaiter(this, void 0, void 0, function* () {
            return microservices_1.ClientProxyFactory.create({
                transport: microservices_1.Transport.TCP,
                port: 8081,
                host: yield this.retreiveCurrentHost()
            });
        });
    }
    // TODO: cache the ip in the future to avoid the long lasting aws api queries!
    retreiveCurrentHost() {
        return __awaiter(this, void 0, void 0, function* () {
            return "localhost";
        });
    }
};
ProductionConnectorService = ProductionConnectorService_1 = __decorate([
    common_1.Component(),
    __metadata("design:paramtypes", [])
], ProductionConnectorService);
exports.ProductionConnectorService = ProductionConnectorService;
var ProductionConnectorService_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdGlvbi1jb25uZWN0b3Itc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9hcHAvc2VydmljZXMvcHJvZHVjdGlvbi1jb25uZWN0b3Itc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1EO0FBQ25ELHlEQUEyRjtBQUkzRixJQUFhLDBCQUEwQixrQ0FBdkM7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxlQUFNLENBQUMsNEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVZLFFBQVE7O1lBQ2pCLE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO1lBQ3RDLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXBDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNwQyxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFNLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFYSxTQUFTOztZQUNuQixNQUFNLENBQUMsa0NBQWtCLENBQUMsTUFBTSxDQUFDO2dCQUM3QixTQUFTLEVBQUUseUJBQVMsQ0FBQyxHQUFHO2dCQUN4QixJQUFJLEVBQUUsSUFBSTtnQkFDVixJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7YUFDekMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQsOEVBQThFO0lBQ2hFLG1CQUFtQjs7WUFDN0IsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDSixDQUFBO0FBakNZLDBCQUEwQjtJQUR0QyxrQkFBUyxFQUFFOztHQUNDLDBCQUEwQixDQWlDdEM7QUFqQ1ksZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBMb2dnZXIgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2xpZW50LCBDbGllbnRQcm94eSwgQ2xpZW50UHJveHlGYWN0b3J5LCBUcmFuc3BvcnQgfSBmcm9tIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5AQ29tcG9uZW50KClcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3Rpb25Db25uZWN0b3JTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9nOiBMb2dnZXI7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubG9nID0gbmV3IExvZ2dlcihQcm9kdWN0aW9uQ29ubmVjdG9yU2VydmljZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IHsgY21kOiBcIkxJU1RfVVNFUlNcIiB9O1xyXG4gICAgICAgIGxldCBjbGllbnQgPSBhd2FpdCB0aGlzLmdldENsaWVudCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBjbGllbnQuc2VuZDxhbnk+KHBhdHRlcm4sIHt9KS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgcmVzLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDbGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIENsaWVudFByb3h5RmFjdG9yeS5jcmVhdGUoeyBcclxuICAgICAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuVENQLCBcclxuICAgICAgICAgICAgcG9ydDogODA4MSwgXHJcbiAgICAgICAgICAgIGhvc3Q6IGF3YWl0IHRoaXMucmV0cmVpdmVDdXJyZW50SG9zdCgpIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGNhY2hlIHRoZSBpcCBpbiB0aGUgZnV0dXJlIHRvIGF2b2lkIHRoZSBsb25nIGxhc3RpbmcgYXdzIGFwaSBxdWVyaWVzIVxyXG4gICAgcHJpdmF0ZSBhc3luYyByZXRyZWl2ZUN1cnJlbnRIb3N0KCkge1xyXG4gICAgICAgIHJldHVybiBcImxvY2FsaG9zdFwiO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==