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
function retry(target, context) {
    console.log("Applying retry decorator");
}
class WeatherAPI {
    constructor() {
        this.apiVersion = 'v1';
    }
    async getWeather(city) {
        console.log(`Getting weather for ${city}`);
        if (Math.random() < 0.75)
            throw new Error("Something went wrong");
        return {
            apiVersion: this.apiVersion,
            temperature: 20,
            humidity: 80,
            city: city,
        };
    }
}
__decorate([
    retry,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeatherAPI.prototype, "getWeather", null);
async function main() {
    const weatherAPI = new WeatherAPI();
    console.log(await weatherAPI.getWeather("San Francisco"));
    console.log(await weatherAPI.getWeather("Los Angeles"));
}
//# sourceMappingURL=retry-decorator.js.map