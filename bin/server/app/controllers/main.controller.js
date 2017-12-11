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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const Observable_1 = require("rxjs/Observable");
let MainController = class MainController {
    listUsers() {
        return Observable_1.Observable.fromPromise(new Promise((resolve, reject) => {
            // compute the result and send it back
            resolve("test");
        }));
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: "LIST_USERS" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Observable_1.Observable)
], MainController.prototype, "listUsers", null);
MainController = __decorate([
    common_1.Controller()
], MainController);
exports.MainController = MainController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc2VydmVyL2FwcC9jb250cm9sbGVycy9tYWluLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEM7QUFDNUMseURBQXVEO0FBQ3ZELGdEQUE2QztBQUc3QyxJQUFhLGNBQWMsR0FBM0I7SUFHWSxTQUFTO1FBQ2IsTUFBTSxDQUFDLHVCQUFVLENBQUMsV0FBVyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU07WUFDdEQsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNKLENBQUE7QUFORztJQURDLDhCQUFjLENBQUMsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUM7OztvQ0FDakIsdUJBQVU7K0NBSzlCO0FBUlEsY0FBYztJQUQxQixtQkFBVSxFQUFFO0dBQ0EsY0FBYyxDQVMxQjtBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gXCJAbmVzdGpzL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiB9IGZyb20gXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBDb250cm9sbGVyKClcclxuZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuXHJcbiAgICBATWVzc2FnZVBhdHRlcm4oeyBjbWQ6IFwiTElTVF9VU0VSU1wiIH0pXHJcbiAgICBwcml2YXRlIGxpc3RVc2VycygpOiBPYnNlcnZhYmxlPE9iamVjdD4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmZyb21Qcm9taXNlKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY29tcHV0ZSB0aGUgcmVzdWx0IGFuZCBzZW5kIGl0IGJhY2tcclxuICAgICAgICAgICAgcmVzb2x2ZShcInRlc3RcIik7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==