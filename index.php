<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" href="style1.css">
</head>
<body>
	<div class="container">
		<form action="weatherphp.php" method="POST">
      <h1 style="color:rgb(248, 166, 12);margin-bottom: -20px;padding-top: 10px;">Enter To Your Weather</h1>
      <h1 style="color:rgb(248, 166, 12);margin-bottom: -5px;">Application</h1>
      <div class="form-input">
				<input type="text" name="uname" placeholder="Enter the User Name"/>	
			</div>
			<div class="form-input">
				<input type="password" name="password" placeholder="Password"/>
			</div>
			<input type="submit" type="submit" value="LOGIN" class="btn-login" name="btnlogin"/>
		</form>
	</div>
</body>
<script src="app.js"></script>
</html>
