require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios')

client.once('ready', () => {
    console.log('Explorer reporting');
});

client.login(process.env.DISCORD);


//Make Science Vessel respond on select
var selectedquotes = ['Receiving headquarters.', 'Transmit orders.', 
'Ah, greetings command.', 'We have you on visual.'];

function randomize(myArray){
	return myArray[Math.floor(Math.random()*myArray.length)];
}
function speakselected(){
    what=randomize(selectedquotes);
}
//Randomizing from quote of 4
client.on('message', message => {
    console.log(message.content); //what was the input?
    if(message.content == '!select'){
        speakselected();
        message.channel.send(what);
    }
});
//Completed make Science Vessel respond on !select

//Using Weather API to make Science Vessel output weather on !weather
//var athensweather= 'api.openweathermap.org/data/2.5/weather?q=athens, us&APPID='+process.env.WEATHER;
//is url for athens' weather
//how can i make this into a parameter for persons' input?
function getweatherdata(city,country){
    //parameter city and country
    axios.get('api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city+','+country;
            APPID: process.env.WEATHER;
        }
    }).then(response=>{
        console.log(response.data.description);
        console.log('Temp: ' + response.data.temp);
    })
}


client.on('message',message => {
    console.log(message.content);
    if(message.content.includes('!weather'){
        //content
        //make function to get the url, parse through the json data, return the thing
        //parse throught !weather (by character?) read until the comma, read after comma
        //!weather athens,us
    }
})
