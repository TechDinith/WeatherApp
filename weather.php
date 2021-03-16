<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>WeatherSee</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
    <div class="input">
      <input type="text" placeholder="Enter the city" class="input_text">
      <input type="submit" value="SUBMIT" class="submit" style="margin-left: 53px">
    </div>
    <div class="input">
      <input type="text" placeholder="Enter Latitude" class="input_latitude">
      <input type="text" placeholder="Enter Longitude" class="input_longitude">
      <input type="submit" value="SUBMIT" class="submit1"style="margin-left: 180px">
    </div>  
  </div>
 
  <!-- <p id="demo"><script>
  
  var milliseconds = 1616306400 * 1000;// 1575909015000
  
  var dateObject = new Date(milliseconds);
  document.getElementById("demo").innerHTML=dateObject;
  </script></p> -->

  <div class="container" style="width: 40%;">
    <div class="card">
      <h1 class="name" id="name"></h1>
      <p class="temp"></p>
      <p class="clouds"></p>
      <p class="desc"></p>
      <p class="humidity"></p>
      <p class="wind"></p>
    </div>
  </div>

  <p><a href=""></a></p>

  <!-- <div>
    <div class="container">
      <div class="card">
        <h1 class="name2" id="name2"></h1>
        <p class="temp2"></p>
        <p class="clouds2"></p>
        <p class="desc2"></p>
        <p class="humidity2"></p>
        <p class="wind2"></p>
      </div>
    </div>
    
    <div class="container">
      <div class="card">
        <h1 class="name3" id="name3"></h1>
        <p class="temp3"></p>
        <p class="clouds3"></p>
        <p class="desc3"></p>
        <p class="humidity3"></p>
        <p class="wind3"></p>
      </div>
    </div>

    <div class="container">
      <div class="card">
        <h1 class="name4" id="name4"></h1>
        <p class="temp4"></p>
        <p class="clouds4"></p>
        <p class="desc4"></p>
        <p class="humidity4"></p>
        <p class="wind4"></p>
      </div>
    </div>

    <div class="container" style="display: none;">
      <div class="card">
        <h1 class="name5" id="name5"></h1>
        <p class="temp5"></p>
        <p class="clouds5"></p>
        <p class="desc5"></p>
        <p class="humidity5"></p>
        <p class="wind5"></p>
      </div>
    </div> -->
    
  </div>
<script src="app.js"></script>
</body>
</html>
