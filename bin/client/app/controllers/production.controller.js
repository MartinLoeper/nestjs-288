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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const production_connector_service_1 = require("./../services/production-connector-service");
const common_1 = require("@nestjs/common");
;
let ProductionController = class ProductionController {
    constructor(prodConnectorService) {
        this.prodConnectorService = prodConnectorService;
    }
    getUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
};
__decorate([
    common_1.Get("/users"),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductionController.prototype, "getUsers", null);
ProductionController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [production_connector_service_1.ProductionConnectorService])
], ProductionController);
exports.ProductionController = ProductionController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdGlvbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L2FwcC9jb250cm9sbGVycy9wcm9kdWN0aW9uLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUF3RjtBQUN4RiwyQ0FBK0g7QUFBQSxDQUFDO0FBR2hJLElBQWEsb0JBQW9CLEdBQWpDO0lBRUksWUFBNkIsb0JBQWdEO1FBQWhELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBNEI7SUFBSSxDQUFDO0lBR3JFLFFBQVEsQ0FBYSxHQUFZOztZQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFbkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU07Z0JBRS9CLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsVUFBVSxDQUFDO29CQUNQLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFWixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0NBQ0osQ0FBQTtBQWZHO0lBREMsWUFBRyxDQUFDLFFBQVEsQ0FBQztJQUNVLFdBQUEsZ0JBQU8sRUFBRSxDQUFBOzs7O29EQWNoQztBQW5CUSxvQkFBb0I7SUFEaEMsbUJBQVUsRUFBRTtxQ0FHMEMseURBQTBCO0dBRnBFLG9CQUFvQixDQW9CaEM7QUFwQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdGlvbkNvbm5lY3RvclNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL3Byb2R1Y3Rpb24tY29ubmVjdG9yLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBHZXQsIEhlYWQsIEh0dHBTdGF0dXMsIExvZ2dlciwgUG9zdCwgUmVxdWVzdCwgUmVzcG9uc2UsIFVzZUd1YXJkcywgVXNlUGlwZXMgfSBmcm9tIFwiQG5lc3Rqcy9jb21tb25cIjs7XHJcblxyXG5AQ29udHJvbGxlcigpXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0aW9uQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwcm9kQ29ubmVjdG9yU2VydmljZTogUHJvZHVjdGlvbkNvbm5lY3RvclNlcnZpY2UpIHsgfSAgICBcclxuXHJcbiAgICBAR2V0KFwiL3VzZXJzXCIpXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0VXNlcnMoIEBSZXF1ZXN0KCkgcmVxOiBSZXF1ZXN0KSB7XHJcbiAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLnByb2RDb25uZWN0b3JTZXJ2aWNlLmdldFVzZXJzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBUSU1FT1VUID0gMjAwMDA7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlJlcXVlc3QgdGltZWQgb3V0IGFmdGVyIDIwcy5cIikpO1xyXG4gICAgICAgICAgICB9LCBUSU1FT1VUKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihyZXNvbHZlKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGVycikpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=