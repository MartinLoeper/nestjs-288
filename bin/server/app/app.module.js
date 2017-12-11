"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_controller_1 = require("./controllers/main.controller");
const common_1 = require("@nestjs/common");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        components: [],
        controllers: [
            main_controller_1.MainController
        ],
        exports: [],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1FQUErRDtBQUMvRCwyQ0FBd0M7QUFZeEMsSUFBYSxpQkFBaUIsR0FBOUI7Q0FBaUMsQ0FBQTtBQUFwQixpQkFBaUI7SUFWN0IsZUFBTSxDQUFDO1FBQ04sVUFBVSxFQUFFLEVBRVg7UUFDRCxXQUFXLEVBQUU7WUFDWCxnQ0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFDO0dBRVcsaUJBQWlCLENBQUc7QUFBcEIsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL21haW4uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xyXG5cclxuQE1vZHVsZSh7XHJcbiAgY29tcG9uZW50czogW1xyXG5cclxuICBdLFxyXG4gIGNvbnRyb2xsZXJzOiBbXHJcbiAgICBNYWluQ29udHJvbGxlclxyXG4gIF0sXHJcbiAgZXhwb3J0czogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Nb2R1bGUge30iXX0=