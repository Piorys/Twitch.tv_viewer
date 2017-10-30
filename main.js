// API call variables
let callback = "?callback=?";
let baseURL = "https://wind-bow.gomix.me/twitch-api";
let byChannel = "/channels/";
let channelsArr =["esportnow", "teamfrenzygg", "powlie", "freecodecamp", "DRWAL12345", "Nervarien", "m4sha", "bungo21", "Lachu"];

$(document).ready(function(){

  function getData(){
  for(i=0; i<channelsArr.length; i++){
    $.getJSON(baseURL+byChannel+channelsArr[i]+callback, function(data){
      let name = data.display_name.toUpperCase();
      let content= data.game;
      let logo = data.logo;
      let link = data.url;
      let desc = data.status;
      let offline = "OFFLINE :(";
      console.log(data);

      if(content === null){
        $("#callback").append('<div class="img-rounded col-md-3 col-md-offset-1 channel"> <h3 class="text-center">' +
        name + ' </h2> <a target="_blank" href="'+ link + '"> <img class="channel-logo center-block img-circle" src="'+
        logo +'" alt="channel_logo"/></a> <p class="text-center"> Currently playing: </p> <p class="text-center"> <strong>' +
        offline +'</strong> </p></div>');
      } else {
      $("#callback").append('<div class="img-rounded col-md-3 col-md-offset-1 channel"> <h3 class="text-center">' +
      name + ' </h2> <a target="_blank" href="'+ link + '"> <img class="channel-logo center-block img-circle" src="'+
      logo +'" alt="channel_logo"/></a> <p class="text-center"> Currently playing: </p> <p class="text-center"> <strong>' +
      content +'</strong></div>');
    }
    })
    }
    };
    getData();
  });
