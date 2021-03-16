var input = document.querySelector('.input_text');
var input1 = document.querySelector('.input_latitude');
var input2 = document.querySelector('.input_longitude');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
// var uname = document.querySelector('.uname');
// var pass = document.querySelector('.password');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var button= document.querySelector('.submit');
var button1= document.querySelector('.submit1');
// var loginbtn= document.querySelector('.btn-login');

// var main2 = document.querySelector('#name2');
// var temp2 = document.querySelector('.temp2');
// var desc2 = document.querySelector('.desc2');
// var clouds2 = document.querySelector('.clouds2');
// var humidity2 = document.querySelector('.humidity2');
// var wind2 = document.querySelector('.wind2');

// var main3 = document.querySelector('#name3');
// var temp3 = document.querySelector('.temp3');
// var desc3 = document.querySelector('.desc3');
// var clouds3 = document.querySelector('.clouds3');
// var humidity3 = document.querySelector('.humidity3');
// var wind3 = document.querySelector('.wind3');

// var main4 = document.querySelector('#name4');
// var temp4 = document.querySelector('.temp4');
// var desc4 = document.querySelector('.desc4');
// var clouds4 = document.querySelector('.clouds4');
// var humidity4 = document.querySelector('.humidity4');
// var wind4 = document.querySelector('.wind4');

// var main5 = document.querySelector('#name5');
// var temp5 = document.querySelector('.temp5');
// var desc5 = document.querySelector('.desc5');
// var clouds5 = document.querySelector('.clouds5');
// var humidity5 = document.querySelector('.humidity5');
// var wind5 = document.querySelector('.wind5');


window.onload=function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=colombo&units=metric&appid=f2aac9bffa3a1ad1208bfcd8cc8f7c72')
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var humidityValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];
  
    main.innerHTML = nameValue;
    desc.innerHTML = descValue.toUpperCase();
    temp.innerHTML = tempValue+" &#8451;";
    humidity.innerHTML = "Humidity "+humidityValue+"%";
    wind.innerHTML = "Wind "+(windValue*3.6).toFixed(3)+" km/h";
    input.value ="";
    input1.value ="";
    input2.value ="";
});

};



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=f2aac9bffa3a1ad1208bfcd8cc8f7c72')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['main']['humidity'];
  var windValue = data['wind']['speed'];

  main.innerHTML = nameValue;
    desc.innerHTML = descValue.toUpperCase();
    temp.innerHTML = tempValue+" &#8451;";
    humidity.innerHTML = "Humidity "+humidityValue+"%";
    wind.innerHTML = "Wind "+(windValue*3.6).toFixed(3)+" km/h";
    input.value ="";
    input1.value ="";
    input2.value ="";

})

.catch(err => alert("Invalid city!"));
})

button1.addEventListener('click', function(name){
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+input1.value+'&lon='+input2.value+'&units=metric&appid=f2aac9bffa3a1ad1208bfcd8cc8f7c72')
  
  .then(response => response.json())
  .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var cloudsValue = data['clouds']['all'];
    var humidityValue = data['main']['humidity'];
    var windValue = data['wind']['speed'];
  
    main.innerHTML = nameValue;
    desc.innerHTML = descValue.toUpperCase();
    temp.innerHTML = tempValue+" &#8451;";
    humidity.innerHTML = "Humidity "+humidityValue+"%";
    wind.innerHTML = "Wind "+(windValue*3.6).toFixed(3)+" km/h";
    input.value ="";
    input1.value ="";
    input2.value ="";
  
  })
  
  .catch(err => alert("Invalid Latitude and Longitude!"));
  })

// loginbtn.addEventListener('click', function(name){
//     if(uname=="admin" && pass=="1234")
//     {
//       window.open('weather.html', '_blank');
//     }
//     else
//     {
//       alert("Invalid Credentials!");
//     }
//   })

  // button.addEventListener('click', function(name){
  //   fetch('http:/api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=f2aac9bffa3a1ad1208bfcd8cc8f7c72')
  //   .then(response => response.json())
  //   .then(data => {
        //var tempValue2 = data['cod'];
      //var nameValue2 = data['name'];
      //var descValue2 = data['weather'][0]['description'];
      //var cloudsValue2 = data['clouds']['all'];
      //var humidityValue2 = data['main']['humidity'];
      //var windValue2 = data['wind']['speed'];
    
      //main.innerHTML = nameValue;
      //desc2.innerHTML = "Desc - "+descValue2;
      //temp2.innerHTML = "Temp - "+tempValue2;
      //clouds2.innerHTML = "clouds - "+cloudsValue2;
      //humidity2.innerHTML = "humidity - "+humidityValue2;
      //wind2.innerHTML = "wind - "+windValue2;
      //input.value ="";
      //input1.value ="";
      //input2.value ="";
    
    // })
    
    // .catch(err => alert("Invalid city!"));
    // })
    
    // button1.addEventListener('click', function(name){
    //   fetch('http://api.openweathermap.org/data/2.5/weather?lat='+input1.value+'&lon='+input2.value+'&units=metric&appid=f2aac9bffa3a1ad1208bfcd8cc8f7c72')
      
    //   .then(response => response.json())
    //   .then(data => {
    //     var tempValue = data['main']['temp'];
    //     var nameValue = data['name'];
    //     var descValue = data['weather'][0]['description'];
    //     var cloudsValue = data['clouds']['all'];
    //     var humidityValue = data['main']['humidity'];
    //     var windValue = data['wind']['speed'];
      
    //     main.innerHTML = nameValue;
    //     desc.innerHTML = "Desc - "+descValue;
    //     temp.innerHTML = "Temp - "+tempValue;
    //     clouds.innerHTML = "clouds - "+cloudsValue;
    //     humidity.innerHTML = "humidity - "+humidityValue;
    //     wind.innerHTML = "wind - "+windValue;
    //     input1.value ="";
    //     input2.value ="";
    //     input.value ="";
      
    //   })
      
    //   .catch(err => alert("Invalid Latitude and Longitude!"));
    //   })
    
