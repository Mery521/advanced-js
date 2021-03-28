function setCookie(key,value) {
  document.cookie = key + "=" + value +";";
 console.log(document.cookie);
}

function getCookie(key) {
  let arr = document.cookie.split(';');
  let val = 0;
  for(let i = 0;i < arr.length;i++) {
    let newArr = arr[i].split('=');
    if(newArr[0] === key){ 
      val = newArr[1];
      break;
    }
  }
  return val;
}

function deleteCookie(key) {
   document.cookie = key +'=;'
}

console.log(setCookie("adminEmail","admin@gmail.com"));
console.log(getCookie("adminEmail"));
deleteCookie("adminEmail");