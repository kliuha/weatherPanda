export function reduceWeatherObject(obj) {
  let temp = [];
  const dateNow = new Date().getDate();
  obj.list.forEach((element) => {
    const elementDate = new Date(element.dt * 1000).getDate();
    if (dateNow == elementDate) {
      temp.push({
        Date: element?.dt_txt.split(" ")[0],
        Temperature: (element?.main.temp - 273.15).toFixed(),
      });
    }
  });
  return temp;
}
