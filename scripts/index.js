
$(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/4a8a8b3f368a2c1d/geolookup/conditions/q/autoip.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var city = parsed_json['location']['city'];
  var country=parsed_json['location']['country'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  var weather=parsed_json['current_observation']['weather'];
  var icon_url=parsed_json['current_observation']['icon_url'];
  
  $('#city').html(city);
  $('#country').html(country);
  $('#temperature').html(temp_f + '&deg;'); //default
  $('#tempUnit').html('F');
  $('#weather').html(weather);
  $('#icon').attr("src", icon_url);

  $('#tempUnit').on('click',function(){
  	if($(this).hasClass('clicked')){
  		$(this).html('F').toggleClass('clicked');
  		$("#temperature").html(temp_f+ '&deg;');
  	}else{
  		$(this).text('C').toggleClass('clicked');
  		$("#temperature").html(temp_c+ '&deg;');
  	}
  })
  }
  });
});
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); //