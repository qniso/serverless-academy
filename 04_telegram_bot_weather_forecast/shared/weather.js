import axios from "axios";

const url =  "https://api.openweathermap.org/data/2.5/forecast?q=Dnipro&units=metric&exclude=daily&appid=bc5b007aa7c41ae1b4703074da2f44aa"

export async function getWeather(){
    try{
        const weather = await axios.get(url);
        return weather.data;
    } catch (error) {
        console.warn(error)
    }
}