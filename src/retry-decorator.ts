function retry(target: any, context: any){
    console.log("Applying retry decorator");
}

class WeatherAPI {
    apiVersion: string = 'v1';

    @retry
    async getWeather(city: string){
        console.log(`Getting weather for ${city}`);

        if (Math.random() < 0.75) throw new Error("Something went wrong");
        return{
            apiVersion: this.apiVersion,
            temperature: 20,
            humidity: 80,
            city: city,
        }
    }
}

async function main(){
    const weatherAPI = new WeatherAPI();
    console.log(await weatherAPI.getWeather("San Francisco"))
    console.log(await weatherAPI.getWeather("Los Angeles"))
}