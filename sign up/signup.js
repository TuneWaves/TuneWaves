var arr = []
$('#sign_btn').click(function(){
var dataUser={
userName: $('#user_name').val(),
password : $('#password').val(),
}
arr.push(dataUser)
var setitem=localStorage.setItem('Sign_Ups',JSON.stringify(arr))
location.replace("../index2.html")
})
//login

/* var arrLog = JSON.parse(localStorage.getItem("setitem"))
var user = $('.user_log').val()
var pass = $('.pass_log').val()

$('#log_btn').click(function(){
  var filtered= find(arrLog,function(e){
  if(!filtered.length){
    $('.msg').append(`
    <p class="Items">You don't have an acount</p>
   `)
  }
  else if(e.userName === user && e.email === mail && e.password === pass ){
    return location.replace("../index2/index2.html")
  }
 else{
  $('.msg').append(`<div class="slide">
  <p class="Items">You don't have an acount</p>
  </div>
  </div>`)
  }
})
})
 */