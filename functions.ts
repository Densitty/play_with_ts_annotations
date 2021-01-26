const add = (a: number, b: number): number => {
  return a + b;
};

// when we are going to explicitly return anything inside our function,we can annotate that function by saying the function is going to return void;
function logger(message: string): void {
  console.log(message);
}

// However when our argument is going to be an object
const weatherToday = {
  date: new Date(),
  weather: "cloudy",
};

function logWeather(forecast: { date: Date; weather: string }): void {
  console.log(forecast.date);
  console.log(forecast.weather);
}

// however, using ES6, we can destructure an object
function weatherLogger({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void {
  console.log(date);
  console.log(weather);
}
