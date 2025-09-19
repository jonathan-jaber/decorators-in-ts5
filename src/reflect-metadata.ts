import "reflect-metadata";

function logMetadata(target: any, propertyKey: string){
    const returnType = Reflect.getMetadata("design:returntype", target, propertyKey);
    const paramTypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
    const type = Reflect.getMetadata("design:type", target, propertyKey);

    console.log(`Method: ${propertyKey}`);
    console.log("  return type", returnType?.name);
    console.log("  param types:", paramTypes?.map((p: any) => p.name));
    console.log("  design type:", type?.name);
}

class WeatherService {
    @logMetadata
    get(city: string): string {
        return `Weather for ${city}`;
    }
}