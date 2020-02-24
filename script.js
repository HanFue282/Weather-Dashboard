$("a").on("click", function() {
    var searchCity =  $(this).attr("data-city");

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=84d508184938f06ffab36d310a17e774";
    var forcastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&APPID=84d508184938f06ffab36d310a17e774";

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function(response){
    $(".city").text(response.name);
    $(".temp").text("Temperature (F): " + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind-speed").text("Wind Speed: " + response.wind.speed);

    var tempF = Math.floor((response.main.temp - 273.15) *1.80 + 32);
    $(".tempF").text("Temperature (K): " + tempF);
    });

    $.ajax({
        url: forcastURL,
        method: "GET"
    }).then(function(response){
    $(".date0").text("Date and time:  " + response.list[1].dt_txt.split(" ")[0].toString());
    $(".temp0").text("Temperature: " + response.list[1].main.temp);
    $(".humidity0").text("Humidity: " + response.list[1].main.humidity);

    $(".date1").text("Date and time:  " + response.list[9].dt_txt.split(" ")[0].toString());
    $(".temp1").text("Temperature: " + response.list[9].main.temp);
    $(".humidity1").text("Humidity: " + response.list[9].main.humidity);

    $(".date2").text("Date and time:  " + response.list[17].dt_txt.split(" ")[0].toString());
    $(".temp2").text("Temperature: " + response.list[17].main.temp);
    $(".humidity2").text("Humidity: " + response.list[17].main.humidity);

    $(".date3").text("Date and time:  " + response.list[25].dt_txt.split(" ")[0].toString());
    $(".temp3").text("Temperature: " + response.list[25].main.temp);
    $(".humidity3").text("Humidity: " + response.list[25].main.humidity);

    $(".date4").text("Date and time:  " + response.list[33].dt_txt.split(" ")[0].toString());
    $(".temp4").text("Temperature: " + response.list[33].main.temp);
    $(".humidity4").text("Humidity: " + response.list[33].main.humidity);
    });
});