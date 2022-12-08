import credits from "../credits.json";

export async function getWeatherData(city) {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${credits.apiWeatherKey}`
    );
    return data.json();
  } catch (error) {
    throw "Error while fetching weather";
  }
}

export async function getCityData(city) {
  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
    );
    return response.json();
  } catch (error) {
    throw ("Error while fetching weather", error);
  }
}
