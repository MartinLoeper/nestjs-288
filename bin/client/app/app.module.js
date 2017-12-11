"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const production_connector_service_1 = require("./services/production-connector-service");
const production_controller_1 = require("./controllers/production.controller");
const common_1 = require("@nestjs/common");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        components: [
            production_connector_service_1.ProductionConnectorService
        ],
        controllers: [
            production_controller_1.ProductionController
        ],
        exports: [],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDBGQUFxRjtBQUNyRiwrRUFBMkU7QUFDM0UsMkNBQXdDO0FBWXhDLElBQWEsaUJBQWlCLEdBQTlCO0NBQWlDLENBQUE7QUFBcEIsaUJBQWlCO0lBVjdCLGVBQU0sQ0FBQztRQUNOLFVBQVUsRUFBRTtZQUNWLHlEQUEwQjtTQUMzQjtRQUNELFdBQVcsRUFBRTtZQUNYLDRDQUFvQjtTQUNyQjtRQUNELE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQztHQUVXLGlCQUFpQixDQUFHO0FBQXBCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3Rpb25Db25uZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0aW9uLWNvbm5lY3Rvci1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZHVjdGlvbkNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2R1Y3Rpb24uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgY29tcG9uZW50czogW1xyXG4gICAgUHJvZHVjdGlvbkNvbm5lY3RvclNlcnZpY2VcclxuICBdLFxyXG4gIGNvbnRyb2xsZXJzOiBbXHJcbiAgICBQcm9kdWN0aW9uQ29udHJvbGxlclxyXG4gIF0sXHJcbiAgZXhwb3J0czogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUge30iXX0=