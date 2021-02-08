function randomString(x){ 
let arr = []; 
let char = 'abcdefjhijqlmnopqrstuvwxyzABCDEFJHIGQLMNOPQRSTUVWXYZ';
    for(let i = 0; i < x; i++){
        arr.push( char.charAt(Math.floor(Math.random() * char.length)));
    }
    return arr;
}
let x = randomString(5);
console.log(x);

function getVoiceString(str){
let voice_element = ['a','e','i','o','y'];
let arr_2 = []; 
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < voice_element.length; j++){
            if(str[i].toLowerCase().indexOf(voice_element[j])>=0) {
                  arr_2.push(str[i]); 
                  break;
            }       
        }
    }
    return arr_2;
}
console.log(getVoiceString(x)); 