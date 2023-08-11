var arr = []
$('#sign_btn').click(function(){
var dataUser={
userName: $('#user_name').val(),
password : $('#password').val(),
}
arr.push(dataUser)
localStorage.setItem('Sign_Ups',JSON.stringify(arr))

location.replace("../index2.html")
})
//login

var arrLog = JSON.parse(localStorage.getItem('Sign_Ups'))
var user = $('.user_log').val()
var pass = $('.pass_log').val()

$('#log_btn').click(function(){
  var user = $('.user_log').val()
var pass = $('.pass_log').val()
  each(arrLog,function(e){
    console.log("user",user);
  console.log("eeee",e.userName);
   if(!user.length || !pass.length){
    $('.msg').append(`<div class="slide">
  <p class="Items">You don't have an acount</p>
   </div>`)
   }
  else if(user == e.userName && pass == e.password){
  console.log("nice")
     location.replace("../index2.html")
  }
  else{
    $('.msg').append(`<div class="slide">
    <p class="Items">You should verrif your password</p>
     </div>`)
 
  }
})
})
function each(coll, f) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              f(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              f(coll[key], key); 
        } 
  } 
}