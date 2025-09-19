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
require("reflect-metadata");
function logMetadata(target, propertyKey) {
    const returnType = Reflect.getMetadata("design:returntype", target, propertyKey);
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(`Method: ${propertyKey}`);
    console.log("  return type", returnType === null || returnType === void 0 ? void 0 : returnType.name);
    console.log("  param types:", paramTypes === null || paramTypes === void 0 ? void 0 : paramTypes.map((p) => p.name));
    console.log("  design type:", type === null || type === void 0 ? void 0 : type.name);
}
class WeatherService {
    get(city) {
        return `Weather for ${city}`;
    }
}
__decorate([
    logMetadata,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], WeatherService.prototype, "get", null);
//# sourceMappingURL=reflect-metadata.js.map