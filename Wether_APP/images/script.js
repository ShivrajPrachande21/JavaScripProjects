
const apikey="7882fffb794e79bff19ed25fb1bdb740";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";




const search_btn=document.getElementById("src-btn");
const search_box=document.getElementById("search-txt");
const weather_icon=document.querySelector(".weather-img");
var errorEl=document.querySelector(".error");

const clouds=document.getElementById("clouds");
const clear=document.getElementById("clear");
const rainy=document.getElementById("rainy");


async function check_weather(city)
{


   const response = await fetch(apiurl + city +`&appid=${apikey}`);
   var data = await response.json();
 
   if(response.status == 404)
    {
        errorEl.style.display="npne";
    }
    else{
        console.log(data);
        document.querySelector(".city_name").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" kmp/h";
     
        if(data.weather[0].main == "Clouds")
        {
         weather_icon.src="clouds.png";
         clouds.style.display="block"
         if(clouds.style.display="block")
         {
             rainy.style.display="none"
             clear.style.display="none"
         }
         }
        else if(data.weather[0].main == "Rain")
        {
         weather_icon.src="rain.png";
         rainy.style.display="block"
         if(rainy.style.display="block")
         {
             clouds.style.display="none"
             clear.style.display="none"
         }
        }
        else if(data.weather[0].main == "Clear")
        {
         weather_icon.src="clear.png";
         clear.style.display="block"
         if(rainy.style.display="block")
         {
             clouds.style.display="none"
             rainy.style.display="none"
         }
        }
        else if(data.weather[0].main == "Smoke")
        {
         weather_icon.src="drizzle.png";
        }
        else if(data.weather[0].main == "snow")
        {
         weather_icon.src="snow.png";
        }
    }
    errorEl.style.display="none";
}
search_btn.addEventListener("click",()=>{
    console.log(search_box.value.toUpperCase());
    
    check_weather(search_box.value);
})



    

