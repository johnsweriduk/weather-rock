**Weather Rock**

https://johnsweriduk.github.io/weather-rock/

The goal of this project was to create a weather forecasting app that would display weather information in a different way.

This app connects to the Openweathermap api (https://openweathermap.org/api) via ajax. 


**Features**

*Wind*
Wind will cause the rock to swing back and forth. The animation is handled entirely in CSS. I created several similar animations with varying degrees of swing. Wind is read from the api in m/s, and rounded to the nearest multiple of 5. The animation is chosen based on this number

*Rain*
Varying amounts of rain will animate based on the hourly rainfall (current conditions), or 3 hour rainfall (5-day forecast). I use javascript to manually generate raindrops and splashes, the amount of which varies on the level of rainfall. CSS animations are then used to animate each raindrop and splash.


**Unsolved Problems**
One of the struggles I dealt with was getting varied data from the API. It's really hard to find places with snowfall this time of year, so I wasn't able to get proper data to test that weather pattern out with. I had similar trouble finding good sets of data for creating fog.


**Installation Instructions**

Just clone from the repository and it will work