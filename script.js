
    async function weather(){

        const cityname =document.getElementById("cityname").value;
        const apikey= "ff9e69172a30ca67ba0638fe37c58d95";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`;
        const resultDiv = document.getElementById("weatherResult");
        try{
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data= await response.json();
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
          resultDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${iconUrl}" alt="${weather}" class="weather-icon" />
    <p>${weather}</p>
    <p><strong>${temp}°C</strong></p>
  `;
    } catch (error) {
  resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
}
    }