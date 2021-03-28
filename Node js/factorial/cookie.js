//sesia
sessionStorage.setItem = ('key', 'value'); // pahpanel tvyalner
var data = sessionStorage.getItem('key', 'value'); //stanal tvyaalner

document.cookie = 'user=John';
let x= document.cookie.split(';');
function getCookie(name){
alert(x);
}


var cookies= document.cookie
.split(';')
.map(cookie => cookie.split('='))
.reduce((accumliator, [key,value])=>({ ...accumliator, [key.trim]: decodeURIComponent(value)}),
{});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  