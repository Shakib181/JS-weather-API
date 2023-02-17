// key = 34995a41f3be6b6f41b4d59ae4e14f3f

    var userInput = document.getElementById("userInput");
    userInput.addEventListener("input",function(){

        $url = "https://api.openweathermap.org/data/2.5/weather?q="+userInput.value+"&appid=34995a41f3be6b6f41b4d59ae4e14f3f";
    
    fetch($url)
    .then(function(response){
        return response.json();
    }).then(function(data){
        var result = data.main.temp-273.15;

        document.getElementById("cityName").innerHTML = userInput.value;
        document.getElementById("temp").innerHTML = result.toFixed(2);
        document.getElementById("speed").innerHTML = data.wind.speed;
        document.getElementById("description").innerHTML = data.weather[0].description
        document.getElementById("icon").src = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    })

    })
    

