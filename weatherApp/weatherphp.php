<?php 

if(isset($_POST['btnlogin'])){
    
    $uname=$_POST['uname'];
    $password=$_POST['password'];
    
    if($uname=="admin" && $password=="1234")
    {
        header('location:weather.html');
    }
    else
    {
        echo "<SCRIPT> 
        alert('Invalid Credentials..!')
        window.location.replace('index.html');
    </SCRIPT>";
 }
        
}
?>