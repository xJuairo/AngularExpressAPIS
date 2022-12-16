const axios = require('axios');
const { json } = require('body-parser');
const bodyParser = require('body-parser');

const getWeather = async (req,res) => {
    const params ={
        lon: req.query.lon,
        lat: req.query.lat,
        appid : 'a97d3d3015184f42d15e3f5083acdfb4'
    }
    const url2 = 'https://api.openweathermap.org/data/2.5/weather';
    axios.get(url2, {params})
    .then((response) =>{
        const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }
        var fs = require('fs');
        fs.writeFile("Weather.txt", JSON.stringify(response.data), function(err) {
        if (err) {
                console.log(err);
            }
        });
        res.json(jsonRes);
        console.log(response)
    }).catch((err) =>{
        console.log(err)
    })
}

const getAtmosfericas = async (req,res) => {
    const url1 = 'https://api.datos.gob.mx/v1/condiciones-atmosfericas';
    const params = {
        state : req.query.state
    }
    axios.get(url1, { params })
    .then((response) =>{
        const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }
        var fs = require('fs');
        fs.writeFile("Atmosfericas.txt", JSON.stringify(response.data), function(err) {
        if (err) {
                console.log(err);
            }
        });
        res.json(jsonRes);
    }).catch((err) =>{
        console.log(err)
    })
}

const getTrendingYoutube = async (req,res) => {
    const shave = 'AIzaSyA7BAri9ksUHMId1wdPfmv9CWOA_NcHuUc';
    const region = 'MX'
    const url = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics,snippet,id&chart=mostPopular&maxResults=25&regionCode='+region+'&key='+shave;
    axios.get(url)
    .then((response) =>{
        const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }
        var fs = require('fs');
        fs.writeFile("nfs/archivos/test.txt", JSON.stringify(response.data), function(err) {
        if (err) {
                console.log(err);
            }
        });
        res.json(jsonRes);
    }).catch((err) =>{
        console.log(err)
    })
}

const getTrendingTikTok = async (req,res) => {
    const url = 'https://tiktok_solutions.p.rapidapi.com/trending';
    const options = {
        params: {custom_cursor: ''},
        headers: {
          'X-RapidAPI-Key': 'cd00f9f84fmsh9faf1e69f252558p1fa0f7jsn28b49d9d3b97',
          'X-RapidAPI-Host': 'tiktok_solutions.p.rapidapi.com'
        }
      };
      
      axios.get(/*'http://localhost:3080/tiktok.txt'*/url, options).then((response) =>{
          console.log(response.data);
          const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }

        
        var fs = require('fs');
        fs.writeFile("nfs/archivos/tiktok.txt", JSON.stringify(response.data), function(err) {
        if (err) {
                console.log(err);
            }
        });
        res.json(jsonRes);
    }).catch(function (error) {
          console.error(error);
      });
}

module.exports = {
    getWeather, getAtmosfericas, getTrendingYoutube, getTrendingTikTok
}